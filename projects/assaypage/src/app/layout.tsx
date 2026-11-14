import type { Metadata } from "next";
import { Inter, Kanit, Sarabun, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kanit = Kanit({
  weight: ["400", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
  display: "swap",
});

const sarabun = Sarabun({
  weight: ["400", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASSAYPAGE",
  description:
    "This website serves as a platform for testing web development and enhancing programming skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${kanit.variable} ${sarabun.variable} ${notoSansJp.variable}`}
    >
      <body className="min-h-screen bg-[#11151c] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
