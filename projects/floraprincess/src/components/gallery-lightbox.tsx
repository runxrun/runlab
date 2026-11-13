"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryLightboxProps {
  images: string[];
  categoryTitle: string;
  categorySlug?: string;
  currentPage?: number;
  totalPages?: number;
  columnsClassName?: string;
  aspectRatioGif?: string;
}

export function GalleryLightbox({
  images,
  categoryTitle,
  categorySlug,
  currentPage = 1,
  totalPages = 1,
  columnsClassName = "grid-cols-2 md:grid-cols-4",
  aspectRatioGif = "/application/images/image-ratio-3-4.gif",
}: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <>
      <div className="py-6">
        <div className={`grid ${columnsClassName} gap-4`}>
          {images.map((imgUrl, idx) => (
            <button
              key={`${imgUrl}-${idx}`}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className="group relative flex bg-neutral-100 overflow-hidden rounded-[4px] h-full w-full cursor-pointer border-0 p-0 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-flora-primary"
              style={{
                backgroundImage: `url('${imgUrl}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {aspectRatioGif ? (
                <img
                  src={aspectRatioGif}
                  alt={`${categoryTitle} ${idx + 1}`}
                  className="opacity-0 w-full"
                />
              ) : (
                <img
                  src={imgUrl}
                  alt={`${categoryTitle} ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-flora-primary rounded-full p-2.5 shadow">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pagination (matching flowers_page.php with shadcn Button) */}
      {totalPages > 1 && categorySlug && (
        <div className="pb-6">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {isPrevDisabled ? (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="rounded-[4px] py-1 px-3 text-[0.8rem]"
              >
                ก่อนหน้า
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-[4px] py-1 px-3 text-[0.8rem]"
              >
                <Link href={`/flowers/${categorySlug}/${prevPage}`}>
                  ก่อนหน้า
                </Link>
              </Button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = page === currentPage;
              return (
                <Button
                  key={page}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  asChild
                  className="rounded-[4px] py-1 px-2.5 text-[0.8rem] min-w-[32px]"
                >
                  <Link href={`/flowers/${categorySlug}/${page}`}>{page}</Link>
                </Button>
              );
            })}

            {isNextDisabled ? (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="rounded-[4px] py-1 px-3 text-[0.8rem]"
              >
                ถัดไป
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-[4px] py-1 px-3 text-[0.8rem]"
              >
                <Link href={`/flowers/${categorySlug}/${nextPage}`}>
                  ถัดไป
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Modal (shadcn Dialog replacing lightgallery.js) */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-2 sm:p-4 flex flex-col items-center justify-center">
          <DialogTitle className="sr-only">
            {categoryTitle} - รูปที่ {(selectedIndex ?? 0) + 1}
          </DialogTitle>
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center w-full">
              {images.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handlePrev}
                  className="absolute left-2 z-10 rounded-full bg-black/60 text-white hover:bg-black/80 hover:text-white h-10 w-10"
                  aria-label="รูปก่อนหน้า"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              )}

              <img
                src={images[selectedIndex]}
                alt={`${categoryTitle} - ${selectedIndex + 1}`}
                className="max-h-[82vh] max-w-full w-auto rounded-md object-contain shadow-2xl"
              />

              {images.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-2 z-10 rounded-full bg-black/60 text-white hover:bg-black/80 hover:text-white h-10 w-10"
                  aria-label="รูปถัดไป"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              )}

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
