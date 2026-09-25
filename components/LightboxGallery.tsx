"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";

type LightboxGalleryProps = {
  gallery: string[];
  title: string;
};

export default function LightboxGallery({
  gallery,
  title,
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const visibleGallery = gallery.slice(0, 6);
  const remainingCount = Math.max(gallery.length - visibleGallery.length, 0);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") swiper?.slidePrev();
      if (event.key === "ArrowRight") swiper?.slideNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, swiper]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {visibleGallery.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-48 overflow-hidden rounded-[24px] text-left sm:h-64"
            aria-label={
              index === 5 && remainingCount > 0
                ? `Open gallery with ${remainingCount} more images`
                : `Open ${title} gallery image ${index + 1}`
            }
          >
            <Image
              src={image}
              alt={`${title} gallery image ${index + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
            {index === 5 && remainingCount > 0 && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-lg font-black text-white backdrop-blur-[2px] transition group-hover:bg-black/55">
                +{remainingCount} more
              </span>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-7 sm:top-7"
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>

          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Swiper
              initialSlide={activeIndex}
              slidesPerView={1}
              onSwiper={setSwiper}
              onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
              className="overflow-hidden rounded-[24px]"
            >
              {gallery.map((image, index) => (
                <SwiperSlide key={image}>
                  <div className="relative h-[70vh] min-h-[320px] w-full">
                    <Image
                      src={image}
                      alt={`${title} gallery image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 1152px"
                      priority={index === activeIndex}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-4"
              aria-label="Previous gallery image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-4"
              aria-label="Next gallery image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
