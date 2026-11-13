import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug, FLOWER_GALLERY } from "@/data/flowers";
import { CategoryGalleryView } from "@/components/category-gallery-view";

interface PageProps {
  params: Promise<{ category: string; page: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; page: string }[] = [];
  for (const cat of FLOWER_GALLERY) {
    const totalPages = Math.ceil(cat.list.length / 20);
    for (let p = 1; p <= totalPages; p++) {
      params.push({ category: cat.link, page: String(p) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  return {
    title: cat ? cat.seoTitle : "ร้านดอกไม้ฟลอร่า ปริ๊นเซส",
  };
}

export default async function FlowerCategoryPaginatedPage({
  params,
}: PageProps) {
  const { category, page } = await params;
  const pageNum = parseInt(page, 10) || 1;

  return <CategoryGalleryView categorySlug={category} pageNumber={pageNum} />;
}
