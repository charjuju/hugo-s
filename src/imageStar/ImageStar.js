import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import imageStarJson from './ImageStar.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function ImageStar() {
  return (
    <div>
      <div className="pc-display">
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
            {imageStarJson.map((data, index) => (
              <SwiperSlide><img style={{ width: '100%' }} src={data} alt="imageStar" /></SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </div>
      <div className="phone-display">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {imageStarJson.map((data, index) => (
              <SwiperSlide><img style={{ width: '100%' }} src={data} alt="imageStar" /></SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </div>
    </div>

  )
}

export default ImageStar;
