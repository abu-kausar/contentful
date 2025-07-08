import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const SplitArrowCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="split-arrow-carousel">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        modules={[Navigation]}
      >
        {Children.map(children, (slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};