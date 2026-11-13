import React from "react";
import Link from "next/link";
import { FLOWER_GALLERY, IMAGE_BASE_PATH } from "@/data/flowers";

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/application/images/banners/banner_2022.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-screen" />
        <div className="container relative">
          <div className="hidden xl:flex">
            <img
              src="/application/images/image-ratio-21-9.gif"
              alt="Banner Ratio 21:9"
              className="w-full"
            />
          </div>
          <div className="hidden md:flex xl:hidden">
            <img
              src="/application/images/image-ratio-16-9.gif"
              alt="Banner Ratio 16:9"
              className="w-full"
            />
          </div>
          <div className="flex md:hidden">
            <img
              src="/application/images/image-ratio-4-3.gif"
              alt="Banner Ratio 4:3"
              className="w-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex justify-center items-center h-full">
              <div className="w-8/12 text-center">
                <div className="py-2 text-2xl sm:text-3xl md:text-4xl font-title text-flora-primary font-bold">
                  ของขวัญสำหรับในทุกๆ วันพิเศษ
                </div>
                <div className="py-2 text-lg sm:text-xl md:text-2xl font-title text-flora-primary">
                  ร้านดอกไม้ฟลอร่า ปริ๊นเซส ยินดีบริการจัดดอกไม้ เพื่อคนที่คุณรัก
                </div>
                <div className="hidden">ราคาสุดพิเศษ Click เลย</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Introduction */}
      <div className="container py-12">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 text-center">
            <div className="pb-2 text-3xl md:text-4xl font-title text-flora-primary">
              ร้านดอกไม้ฟลอร่าปริ๊นเซส
            </div>
            <div className="pb-2 text-base text-flora-secondary leading-relaxed">
              ร้านดอกไม้ฟลอร่า ปริ๊นเซส ยินดีบริการจัดส่งดอกไม้เพื่อคนที่คุณรัก
              เพราะดอกไม้คือสัญลักษณ์แสดงถึงความรักเราจึง
              ขอมอบบริการสุดพิเศษให้คุณได้ส่งความรักให้คนสำคัญ
              ด้วยช่อดอกไม้กระเช้าหรือแจกันสวยๆที่เราคัดสรร
              ดอกไม้คุณภาพดีมาเพื่อคุณ
            </div>
          </div>
        </div>
      </div>

      {/* Category Preview Sections */}
      <div className="container pb-12">
        {FLOWER_GALLERY.map((category) => (
          <section key={category.link}>
            <div className="flex justify-between items-center">
              <div className="pb-4">
                <h2 className="font-title text-2xl text-flora-primary m-0">
                  {category.title}
                </h2>
              </div>
              <div className="pb-4">
                <Link
                  href={`/flowers/${category.link}`}
                  className="text-[#0d6efd] hover:underline text-base"
                >
                  แบบดอกไม้เพิ่มเติม
                </Link>
              </div>
            </div>

            <div className="pb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.list.slice(0, 6).map((item, idx) => (
                  <div key={`${category.link}-${idx}`}>
                    <Link
                      href={`/flowers/${category.link}`}
                      className="flex bg-neutral-100 overflow-hidden rounded-[4px] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                      style={{
                        backgroundImage: `url('${IMAGE_BASE_PATH}${item.image}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="hidden md:flex w-full">
                        <img
                          src="/application/images/image-ratio-3-4.gif"
                          alt={category.title}
                          className="w-full"
                        />
                      </div>
                      <div className="flex md:hidden w-full">
                        <img
                          src="/application/images/image-ratio-4-3.gif"
                          alt={category.title}
                          className="w-full"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
