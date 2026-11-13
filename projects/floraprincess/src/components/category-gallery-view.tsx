import React from "react";
import Link from "next/link";
import { getCategoryBySlug, IMAGE_BASE_PATH } from "@/data/flowers";
import { CategoryNav } from "@/components/category-nav";
import { GalleryLightbox } from "@/components/gallery-lightbox";

interface CategoryGalleryViewProps {
  categorySlug: string;
  pageNumber?: number;
}

export function CategoryGalleryView({
  categorySlug,
  pageNumber = 1,
}: CategoryGalleryViewProps) {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return (
      <div className="container">
        <div className="py-12 text-center">
          <div className="text-4xl font-title text-flora-primary">
            ไม่พบข้อมูล
          </div>
          <div className="text-xl text-flora-secondary mt-2">
            ไม่พบหน้า ({categorySlug}) บน website ของเรา
          </div>
          <div className="py-6">
            <Link
              href="/"
              className="text-xl text-flora-primary hover:underline"
            >
              กลับหน้าแรก
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const itemsPerPage = 20;
  const totalItems = category.list.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const safePage = Math.max(1, Math.min(pageNumber, totalPages));
  const startIndex = (safePage - 1) * itemsPerPage;
  const pageImages = category.list
    .slice(startIndex, startIndex + itemsPerPage)
    .map((item) => `${IMAGE_BASE_PATH}${item.image}`);

  return (
    <div>
      <CategoryNav
        currentCategoryTitle={category.title}
        currentCategorySlug={category.link}
      />

      <div className="container">
        <div className="hidden md:block py-6">
          <h1 className="pt-4 text-center text-3xl font-bold font-title text-flora-primary m-0">
            {category.title}
          </h1>
        </div>

        <GalleryLightbox
          images={pageImages}
          categoryTitle={category.title}
          categorySlug={category.link}
          currentPage={safePage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
