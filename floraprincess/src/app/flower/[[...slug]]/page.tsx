import React from "react";
import { Smartphone, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface FlowerDetailPageProps {
  params: Promise<{ slug?: string[] }>;
}

const TAGS = [
  "ช่อดอกไม้",
  "ช่อดอกไม้รับปริญญา",
  "ช่อดอกไม้แสดงความยินดี",
  "ช่อดอกไม้ให้แฟน",
  "ช่อดอกไม้วันเกิด",
];

export default async function FlowerDetailPage({
  params,
}: FlowerDetailPageProps) {
  const { slug } = await params;
  const code = slug?.[0] || "";

  return (
    <div className="py-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 lg:col-span-5">
            <img
              src="/application/images/products/2022/bouquet/348095.jpg"
              alt="ช่อดอกกุหลาบ ขนาดกลาง"
              className="w-full rounded-md shadow-sm"
            />
          </div>

          <div className="md:col-span-6 lg:col-span-7 md:pl-4">
            <div className="flex flex-wrap py-3 items-center justify-between gap-2">
              <h1 className="font-bold text-2xl md:text-3xl text-flora-primary m-0">
                ช่อดอกกุหลาบ ขนาดกลาง
              </h1>
              {code && (
                <span className="text-[0.9rem] text-flora-secondary">
                  {code}
                </span>
              )}
            </div>

            <div className="py-3">
              <p className="text-base text-flora-secondary leading-relaxed">
                ช่อดอกทานกุหลาบขนาดใหญ่ จัดเต็มถึง 7 ดอก
                แซมด้วยไม้ประดับอย่างดอกแคสเปียและดอกยิปโซ
                ห่อช่อด้านนอกด้วยกระดาษสีขาว และด้านในห่อด้วยพลาสติกใสสีรุ้ง
                พร้อมผูกด้วยริบบิ้นสีขาวและน้ำตาลทองพิมพ์ลาย Love You Flower สวย
                สดใส อลังการจนคนรับลืมความร้อนไปเลย
              </p>
            </div>

            <div className="pb-4 space-y-2">
              <div className="flex items-center">
                <span className="text-flora-primary pr-3">
                  <Smartphone className="w-5 h-5" />
                </span>
                <span className="text-flora-primary font-bold">
                  รบกวนสั่งล่วงหน้าอย่างน้อย 2 วัน
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-flora-primary pr-3">
                  <Truck className="w-5 h-5" />
                </span>
                <span className="text-flora-primary font-bold">
                  มีบริการจัดส่งค่ะ
                </span>
              </div>
            </div>

            <Separator className="my-3" />

            <div className="pt-2 flex flex-wrap items-center gap-2 text-flora-secondary">
              <span className="text-[0.9rem] pr-1 whitespace-nowrap">
                หมวดหมู่ :
              </span>
              {TAGS.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
