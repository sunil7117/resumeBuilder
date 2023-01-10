import React from "react";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const ProductSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
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

export default ProductSlider;
