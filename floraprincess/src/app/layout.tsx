import type { Metadata } from "next";
import { Sarabun, Sriracha, Roboto } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const sarabun = Sarabun({
  weight: ["400", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
  display: "swap",
});

const sriracha = Sriracha({
  weight: ["400"],
  subsets: ["thai", "latin"],
  variable: "--font-sriracha",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ร้านดอกไม้ฟลอร่า ปริ๊นเซส",
  description: "ร้านดอกไม้ฟลอร่าปริ๊นเซส ยินดีบริการจัดดอกไม้เพื่อคนที่คุณรัก",
  keywords: [
    "จัดดอกไม้",
    "ช่อดอกไม้",
    "กระเช้า",
    "ร้านดอกไม้",
    "ฟลอร่า ปริ๊นเซส",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${sarabun.variable} ${sriracha.variable} ${roboto.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S286GPEPX5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S286GPEPX5');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
