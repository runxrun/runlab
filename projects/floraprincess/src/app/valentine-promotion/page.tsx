import React from "react";
import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/gallery-lightbox";

export const metadata: Metadata = {
  title: "Valentine Promotion - ร้านดอกไม้ฟลอร่า ปริ๊นเซส",
};

const VALENTINE_IMAGES = [
  "/application/images/products/2023/valentines/377782.jpg",
  "/application/images/products/2023/valentines/377783.jpg",
];

export default function ValentinePromotionPage() {
  return (
    <div
      style={{
        backgroundColor: "#f8c0c1",
        backgroundImage:
          "url('/application/images/banners/hearts-3972327_1920.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "100%",
      }}
    >
      <div className="container">
        <div className="flex justify-center py-6">
          <div className="w-full xl:w-10/12">
            <h1 className="pt-4 pb-2 text-3xl font-title text-flora-primary font-bold text-center">
              ราคาดอกไม้วันวาเลนไทน์
            </h1>
            <div className="pb-4 text-base font-title text-flora-primary font-bold text-center">
              <div>
                (แดง, ขาว, รวมสี / ใส่สีหรือสีพิเศษอื่นโปรดระบุ)
                ราคารวมดอกไม้และใบแซมปกติไม่เกิน 3 ชนิด
              </div>
              <div>(ไม้แซมพิเศษมีค่าใช้จ่ายเพิ่มตามชนิดดอกไม้)</div>
            </div>

            <GalleryLightbox
              images={VALENTINE_IMAGES}
              categoryTitle="ราคาดอกไม้วันวาเลนไทน์"
              columnsClassName="grid-cols-1 md:grid-cols-2"
              aspectRatioGif=""
            />

            <div className="py-8 text-xl font-title text-flora-primary text-center">
              จองได้ทาง LINE : @floraprincess หรือทาง Facebook : Flora Princess
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
