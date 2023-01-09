import React from "react";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/assets/img/categories/cat-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-4.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-1.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
