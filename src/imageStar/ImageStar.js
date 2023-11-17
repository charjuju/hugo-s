import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

function ImageStar() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img style={{width: '99%'}} src="imageStar/broum.jpeg" alt="imageStar"/></SwiperSlide>
        <SwiperSlide><img style={{width: '99%'}} src="imageStar/drift.jpeg" alt="imageStar"/></SwiperSlide>
        <SwiperSlide><img style={{width: '99%'}} src="imageStar/broum.jpeg" alt="imageStar"/></SwiperSlide>
        <SwiperSlide><img style={{width: '99%'}} src="imageStar/drift.jpeg" alt="imageStar"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageStar;
