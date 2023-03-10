import React from "react";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={5}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="slideSetting">
        <img src="/assets/img/categories/cat-1.jpg" alt="" />
        <div className="slideText">Drink Food</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-2.jpg" alt="" />
        <div className="slideText">Drink Food</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-3.jpg" alt="" />
        <div className="slideText">Drink Food</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-4.jpg" alt="" />
        <div className="slideText">Drink Food</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/img/categories/cat-1.jpg" alt="" />
        <div className="slideText">Drink Food</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
