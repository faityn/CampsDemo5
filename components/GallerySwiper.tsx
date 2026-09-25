"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type GallerySwiperProps = {
  gallery: string[];
  slidesPerView?: number;
  imageClassName?: string;
};

export default function GallerySwiper({
  gallery,
  slidesPerView = 1,
  imageClassName = "h-[420px] w-full object-cover sm:h-[560px]",
}: GallerySwiperProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="gallery-swiper relative overflow-hidden rounded-[24px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        slidesPerView={slidesPerView}
        spaceBetween={12}
        lazyPreloadPrevNext={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="overflow-hidden rounded-[24px]"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt={`Галерейн зураг ${index + 1}`}
              width={1200}
              height={700}
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              className={imageClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="gallery-nav gallery-nav-prev"
        aria-label="Өмнөх зураг"
      >
        <ChevronLeft size={18} strokeWidth={2.25} />
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="gallery-nav gallery-nav-next"
        aria-label="Дараагийн зураг"
      >
        <ChevronRight size={18} strokeWidth={2.25} />
      </button>
    </div>
  );
}
