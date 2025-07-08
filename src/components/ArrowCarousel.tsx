import { Children, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useHover(ref: any) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);
    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref]);

  return hovered;
}

const ArrowsCarousel = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any>(null);
  const ref = useRef(null);
  const hovered = useHover(ref);

  useEffect(() => {
    if (swiper && swiper.autoplay) {
      if (hovered) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }, [swiper, hovered]);

  return (
    <div
      ref={ref}
      className="arrows-carousel px-0 md:px-0 py-4 w-full overflow-hidden"
    >
      <div className="md:px-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={setSwiper}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 48,
            },
          }}
          navigation
          loop
          modules={[Navigation, Autoplay]}
        >
          {Children.map(children, (slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ArrowsCarousel;