import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function ImageStar() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img style={{width: '100%'}} src="imageStar/broum.jpeg" alt="imageStar"/></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src="imageStar/drift.jpeg" alt="imageStar"/></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src="imageStar/broum.jpeg" alt="imageStar"/></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src="imageStar/drift.jpeg" alt="imageStar"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageStar;
