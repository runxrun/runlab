"use client";

import { useState } from "react";
import {
  Cloud,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Globe,
  Terminal,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layers,
  Server,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Next.js 15 Static Export",
    description:
      "ตั้งค่า output: 'export' พร้อมสร้างไฟล์ Static HTML/CSS/JS ที่โฟลเดอร์ out/ สำหรับขึ้น Cloudflare Pages ทันที",
    badge: "Ready",
  },
  {
    icon: Globe,
    title: "Cloudflare Edge Network",
    description:
      "รองรับการกระจายคอนเทนต์ผ่าน CDN ทั่วโลกด้วยความเร็วสูง Latency ต่ำ และรองรับ SSL อัตโนมัติ",
    badge: "Global CDN",
  },
  {
    icon: Layers,
    title: "Multi-Project Workspace",
    description:
      "แชร์ node_modules ร่วมกันที่ Root Directory ช่วยประหยัดพื้นที่และแยกโฟลเดอร์โปรเจกต์อย่างเป็นระบบ",
    badge: "Monorepo",
  },
  {
    icon: ShieldCheck,
    title: "Tailwind CSS + Lucide Icons",
    description:
      "ตรวจสอบการทำงานของ CSS Bundling, Responsive Layout และ Client-side State บน Production Build",
    badge: "UI Verified",
  },
];

const DEPLOY_STEPS = [
  {
    step: "01",
    label: "Build Project",
    command: "npm run build:assaypage",
    detail: "คอมไพล์โปรเจกต์ assaypage และส่งออกไฟล์ Static ไปยัง projects/assaypage/out",
  },
  {
    step: "02",
    label: "Output Directory",
    command: "projects/assaypage/out",
    detail: "ตั้งค่า Build output directory บน Cloudflare Pages ให้ชี้มาที่โฟลเดอร์นี้",
  },
  {
    step: "03",
    label: "Verify Live Site",
    command: "https://assaypage.pages.dev",
    detail: "ทดสอบการแสดงผลหน้าเว็บ, CSS และ Interactive Component บนโดเมนจริง",
  },
];

export default function HomePage() {
  const [pingCount, setPingCount] = useState(0);
  const [lastCheck, setLastCheck] = useState<string>("พร้อมทดสอบ");

  const handleTestClick = () => {
    setPingCount((prev) => prev + 1);
    setLastCheck(new Date().toLocaleTimeString("th-TH"));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">
                AssayPage
              </span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30 font-medium">
                v1.0.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Cloudflare Pages Ready</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 container mx-auto px-4 py-12 sm:py-20">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>MTI Next.js Multi-Project Workspace • Port 3003</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            ยินดีต้อนรับสู่{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              AssayPage
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            หน้า Home Page สำหรับทดสอบการ Build และ Deploy โปรเจกต์{" "}
            <code className="text-orange-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              projects/assaypage
            </code>{" "}
            ขึ้นสู่ <strong className="text-slate-200">Cloudflare Pages</strong>{" "}
            ด้วย Next.js Static Export และ Tailwind CSS
          </p>

          {/* Interactive Test Card */}
          <div className="pt-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-orange-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">
                    Client Hydration & State Test
                  </div>
                  <div className="text-sm font-semibold text-white">
                    คลิกทดสอบแล้ว:{" "}
                    <span className="text-orange-400">{pingCount} ครั้ง</span>{" "}
                    <span className="text-xs text-slate-500 font-normal">
                      ({lastCheck})
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleTestClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium text-sm shadow-lg shadow-orange-500/25 transition active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>กดทดสอบการทำงาน</span>
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-orange-500/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Configured & Verified</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Cloudflare Deployment Guide Section */}
        <section className="mt-16 max-w-4xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  การตั้งค่า Deploy บน Cloudflare Pages
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  ค่าแนะนำสำหรับเชื่อมต่อ Git Repository หรืออัปโหลดผ่าน Wrangler CLI
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              <span>output: &quot;export&quot;</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Static HTML</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {DEPLOY_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-orange-400">
                    STEP {s.step}
                  </span>
                  <span className="text-slate-400 font-medium">{s.label}</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-emerald-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 truncate">
                  {s.command}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AssayPage — MTI Next.js Workspace
          </div>
          <div className="flex items-center gap-4">
            <span>Framework: Next.js 15</span>
            <span>•</span>
            <span>Target: Cloudflare Pages</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
