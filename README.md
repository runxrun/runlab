# MTI Next.js Multi-Project Workspace

โครงสร้างโปรเจกต์แบบ Multi-Site ที่ติดตั้ง `node_modules` ไว้ที่ Root (`/Users/runxrun/Documents/mti/nextjs/`) เพียงที่เดียว โดยเก็บแต่ละโปรเจกต์ไว้ในโฟลเดอร์ `projects/` และรันแยกแต่ละโปรเจกต์ผ่าน `npm run cli`

## รายชื่อโปรเจกต์ที่รองรับ (`projects/<name>`)
- `floraprincess` (Default Port: 3000)
- `noagroup369` (Default Port: 3001)
- `kachanamaha` (Default Port: 3002)
- `assaypage` (Default Port: 3003)

## คำสั่งใช้งาน (CLI Commands)

### Development Mode
```bash
npm run cli floraprincess dev
npm run cli noagroup369 dev
npm run cli kachanamaha dev
npm run cli assaypage dev
```

### Production Build
```bash
npm run cli floraprincess build
npm run cli noagroup369 build
npm run cli kachanamaha build
npm run cli assaypage build
```

### Start Production Server
```bash
npm run cli floraprincess start
npm run cli noagroup369 start
npm run cli kachanamaha start
npm run cli assaypage start
```
