#!/usr/bin/env node
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const VALID_PROJECTS = [
  "floraprincess",
  "noagroup369",
  "kachanamaha",
  "assaypage",
];

const VALID_COMMANDS = ["dev", "build", "start", "lint", "deploy"];

// Default ports per project so you can run multiple projects in dev mode simultaneously
const PROJECT_PORTS = {
  floraprincess: 3000,
  noagroup369: 3001,
  kachanamaha: 3002,
  assaypage: 3003,
};

const args = process.argv.slice(2);
const project = args[0];
const command = args[1] || "dev";
const extraArgs = args.slice(2);

if (!project || !VALID_PROJECTS.includes(project)) {
  console.error(
    "❌ Usage: npm run cli <project> [dev|build|start|lint|deploy] [extra-args]"
  );
  console.error("\nAvailable projects:");
  VALID_PROJECTS.forEach((p) => {
    console.error(`  - ${p} (default port: ${PROJECT_PORTS[p]})`);
  });
  console.error("\nExamples:");
  console.error("  npm run cli floraprincess dev");
  console.error("  npm run cli floraprincess build");
  console.error("  npm run cli noagroup369 dev");
  console.error("  npm run cli noagroup369 build");
  process.exit(1);
}

if (!VALID_COMMANDS.includes(command)) {
  console.error(
    `❌ Invalid command "${command}". Must be one of: ${VALID_COMMANDS.join(", ")}`
  );
  process.exit(1);
}

const rootDir = path.resolve(__dirname, "..");
const projectDir = path.resolve(rootDir, "projects", project);

if (!fs.existsSync(projectDir)) {
  console.error(`❌ Project directory not found: ${projectDir}`);
  process.exit(1);
}

if (command === "deploy") {
  const wranglerConfig = path.resolve(projectDir, "wrangler.jsonc");
  const deployArgs = ["wrangler", "deploy", "--config", wranglerConfig, ...extraArgs];
  console.log(`☁️  [${project}] Running: npx ${deployArgs.join(" ")}`);
  const child = spawn("npx", deployArgs, {
    cwd: rootDir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
  return;
}

const nextBin = path.resolve(rootDir, "node_modules", ".bin", "next");
const cmdArgs = [command];

// Pass default port in dev/start if user didn't specify -p / --port
if (
  (command === "dev" || command === "start") &&
  !extraArgs.includes("-p") &&
  !extraArgs.includes("--port")
) {
  cmdArgs.push("-p", String(PROJECT_PORTS[project] || 3000));
}

cmdArgs.push(...extraArgs);

console.log(`🚀 [${project}] Running: next ${cmdArgs.join(" ")}`);
console.log(`📂 Working directory: ${projectDir}`);

const child = spawn(nextBin, cmdArgs, {
  cwd: projectDir,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    NEXT_PROJECT_NAME: project,
  },
});

child.on("exit", (code) => {
  if (code === 0 && command === "build") {
    // Generate root wrangler.jsonc from projects/<project>/wrangler.jsonc so `npx wrangler deploy` from root works directly
    const projectWranglerPath = path.resolve(projectDir, "wrangler.jsonc");
    if (fs.existsSync(projectWranglerPath)) {
      const rawConfig = JSON.parse(fs.readFileSync(projectWranglerPath, "utf8"));
      const rootWranglerConfig = {
        ...rawConfig,
        assets: {
          ...(rawConfig.assets || {}),
          directory: `./projects/${project}/out`,
        },
      };
      fs.writeFileSync(
        path.resolve(rootDir, "wrangler.jsonc"),
        JSON.stringify(rootWranglerConfig, null, 2) + "\n"
      );
      console.log(
        `✅ [${project}] Generated root wrangler.jsonc for Cloudflare deploy (assets -> ./projects/${project}/out)`
      );
    }
  }
  process.exit(code ?? 0);
});

