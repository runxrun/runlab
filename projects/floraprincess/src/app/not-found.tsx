import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container">
      <div className="py-16 text-center">
        <div className="text-6xl font-title text-flora-primary font-bold mb-2">
          404
        </div>
        <div className="text-3xl font-title text-flora-primary mb-2">
          ไม่พบข้อมูลที่คุณต้องการ
        </div>
        <p className="text-lg text-flora-secondary mb-6">
          ขออภัย ไม่พบหน้าเว็บไซต์ที่คุณกำลังค้นหา หน้านี้อาจถูกย้ายหรือลบออกไปแล้ว
        </p>
        <div>
          <Button asChild size="lg" className="font-sans">
            <Link href="/">กลับสู่หน้าแรก</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
