import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AssayPage | Cloudflare Deployment Test",
  description:
    "Next.js Static Export + Tailwind CSS Home Page สำหรับทดสอบการ Deploy บน Cloudflare Pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
