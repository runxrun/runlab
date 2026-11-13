import React from "react";
import { Smartphone } from "lucide-react";
import { FacebookSquareIcon, LineIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="py-6">
        <div className="pt-4 text-2xl font-title text-center text-flora-primary">
          ติดต่อเราร้านดอกไม้ฟลอร่า ปริ๊นเซส
        </div>

        <div className="py-3">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="tel:0979949542"
              className="flex items-center text-xl text-flora-primary no-underline hover:opacity-80 transition-opacity"
            >
              <span className="pr-2">
                <Smartphone className="w-5 h-5" />
              </span>
              <span className="pl-1 font-title">097-994-9542</span>
            </a>

            <div className="hidden md:block text-xl font-title text-flora-primary">
              หรือ
            </div>

            <a
              href="tel:0859049977"
              className="flex items-center text-xl text-flora-primary no-underline hover:opacity-80 transition-opacity"
            >
              <span className="pr-2">
                <Smartphone className="w-5 h-5" />
              </span>
              <span className="pl-1 font-title">085-904-9977</span>
            </a>
          </div>
        </div>

        <div className="pt-2 pb-4">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.facebook.com/FloraPrincessbkk/"
              className="inline-flex flex-col items-center px-3 py-2 rounded-md no-underline hover:bg-black/5 transition-colors"
              style={{ color: "#3e568f" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl mb-1">
                <FacebookSquareIcon className="w-9 h-9" />
              </div>
              <div className="text-base">FloraPrincessbkk</div>
            </a>

            <a
              href="http://line.me/ti/p/~@floraprincess"
              className="inline-flex flex-col items-center px-3 py-2 rounded-md no-underline hover:bg-black/5 transition-colors"
              style={{ color: "#39ae41" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl mb-1">
                <LineIcon className="w-9 h-9" />
              </div>
              <div className="text-base">@floraprincess</div>
            </a>
          </div>
        </div>

        <div className="pb-2">
          <div className="flex justify-center">
            <div className="text-base text-flora-secondary text-center">
              ลิขสิทธิ์ &copy; {currentYear} - Flora Princess - สงวนสิทธิ์ทุกประการ
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
