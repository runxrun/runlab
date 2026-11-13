"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FLOWER_GALLERY } from "@/data/flowers";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { SpaIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  currentCategoryTitle: string;
  currentCategorySlug: string;
}

export function CategoryNav({
  currentCategoryTitle,
  currentCategorySlug,
}: CategoryNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-flora-primary">
      <div className="container">
        {/* Mobile Collapsible Category Bar (shadcn Collapsible) */}
        <div className="block md:hidden py-3">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="pr-2 text-base font-bold text-white">
                  <SpaIcon className="w-4 h-4" />
                </span>
                <span className="text-base font-bold text-white">
                  {currentCategoryTitle}
                </span>
              </div>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white py-0 px-2 text-lg border-0 shadow-none hover:bg-white/10 hover:text-white"
                  aria-label="เลือกหมวดหมู่ดอกไม้"
                >
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <div
                className="mt-2 pt-2"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
              >
                <div className="grid grid-cols-2 gap-y-1">
                  {FLOWER_GALLERY.map((cat) => (
                    <div key={cat.link} className="py-1">
                      <Link
                        href={`/flowers/${cat.link}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center no-underline hover:opacity-80"
                      >
                        <span className="px-2 text-xs text-white/50">
                          <ChevronRight className="w-3 h-3" />
                        </span>
                        <span
                          className={cn(
                            "pl-1 text-[0.9rem] text-white",
                            cat.link === currentCategorySlug &&
                              "font-bold underline underline-offset-4"
                          )}
                        >
                          {cat.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Desktop Category Bar */}
        <div className="hidden md:block py-3">
          <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
            {FLOWER_GALLERY.map((cat) => (
              <div key={cat.link}>
                <Link
                  href={`/flowers/${cat.link}`}
                  className={cn(
                    "text-white no-underline hover:opacity-85 transition-opacity text-base",
                    cat.link === currentCategorySlug &&
                      "font-bold underline underline-offset-4"
                  )}
                >
                  {cat.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
