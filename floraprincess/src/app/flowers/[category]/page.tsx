import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug, FLOWER_GALLERY } from "@/data/flowers";
import { CategoryGalleryView } from "@/components/category-gallery-view";

interface PageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  return FLOWER_GALLERY.map((cat) => ({
    category: cat.link,
  }));
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

export default async function FlowerCategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { category } = await params;
  const { page } = await searchParams;
  const pageNum = page ? parseInt(page, 10) || 1 : 1;

  return <CategoryGalleryView categorySlug={category} pageNumber={pageNum} />;
}
