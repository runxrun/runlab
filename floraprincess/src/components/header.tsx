"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { MENU_ITEMS } from "@/data/flowers";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FacebookSquareIcon, LineIcon } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="flex py-3">
              <img
                src="/application/images/flora-princess.png"
                alt="Flora Princess"
                className="h-auto max-w-full"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Menu (shadcn Sheet replacing Bootstrap Offcanvas) */}
          <div className="block md:hidden py-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-flora-secondary hover:bg-flora-primary/10 hover:text-flora-primary"
                  aria-label="เปิดเมนู"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-flora-primary border-none text-white p-0 w-[300px] sm:w-[360px]"
              >
                <SheetHeader className="p-4">
                  <SheetTitle className="font-title text-2xl sm:text-3xl text-white font-normal">
                    Flora Princess
                  </SheetTitle>
                </SheetHeader>
                <div
                  className="p-4"
                  style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
                >
                  <nav className="flex flex-col">
                    <div className="py-2">
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="flex items-center text-white no-underline hover:opacity-80 transition-opacity"
                      >
                        <ChevronRight className="w-3.5 h-3.5 mr-2 shrink-0" />
                        <span className="pl-1 text-base">หน้าแรก</span>
                      </Link>
                    </div>
                    {MENU_ITEMS.map((menu) => (
                      <div key={menu.link} className="py-2">
                        <Link
                          href={`/flowers/${menu.link}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center text-white no-underline hover:opacity-80 transition-opacity"
                        >
                          <ChevronRight className="w-3.5 h-3.5 mr-2 shrink-0" />
                          <span className="pl-1 text-base">{menu.title}</span>
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:block py-3">
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/FloraPrincessbkk/"
                className="flex items-center no-underline hover:opacity-80 transition-opacity text-base"
                style={{ color: "#3e568f" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pr-2">
                  <FacebookSquareIcon className="w-4 h-4" />
                </span>
                <span>Facebook</span>
              </a>
              <a
                href="http://line.me/ti/p/~@floraprincess"
                className="flex items-center no-underline hover:opacity-80 transition-opacity text-base"
                style={{ color: "#39ae41" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pr-2">
                  <LineIcon className="w-4 h-4" />
                </span>
                <span>@floraprincess</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
