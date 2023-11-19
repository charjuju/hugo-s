import React, { useState } from 'react';
import jsonData from './gestionDesImages.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SwiperEz({ imageStarTab, path, initialSlide}) {
  return (
    <div>
      <div className="pc-display">
        <div>
          <Swiper
            initialSlide={initialSlide}
            spaceBetween={0}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
          >
            {imageStarTab.map((data, index) => (
              <SwiperSlide>
                <div style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img style={{ maxWidth: '100vw', maxHeight: '100vh' }} src={path + data} alt="imageStar" />
                </div>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </div>
    </div>

  )
}

function Chapter() {
  const [imagePick, setImagePick] = useState(-1)
  const bookPick = localStorage.getItem('Book') ? localStorage.getItem('Book') : '0'
  const ChapterPick = localStorage.getItem('Chapter') ? localStorage.getItem('Chapter') : '0'
  const ChapterInfo = jsonData[bookPick].book[ChapterPick].chapter

  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {ChapterInfo.file.map((data, index) => (
          <div key={index}>
            <img onClick={() => setImagePick(index)} style={{ maxWidth: '100vw', maxHeight: '90vh', margin: '5px', backgroundColor: '#7db6dd'}} alt={`${ChapterInfo.path}${data}`} src={`${ChapterInfo.path}${data}`} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <GalerieImage />
      </div>
      {imagePick !== -1 &&
        <div className='cache-background'>
          <div >
            <div>
              <SwiperEz initialSlide={imagePick} path={ChapterInfo.path} imageStarTab={ChapterInfo.file} />
            </div>
            <img onClick={() => setImagePick(-1)} style={{cursor: 'pointer', zIndex:'100', height: '32px', position: 'fixed', right: '10px', top: '10px' }} src='/ico/cancel_close_delete_exit_logout_remove_x_icon_123217.svg' alt='close' />
          </div>
        </div>
      }
    </div>
  );
}

export default Chapter;
