import React, { useEffect, useState } from 'react';
import Styles from './feed.module.css';
import axios from 'axios';
import RecipeReviewCard from './Cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import Ad from './ad/Ad';

import pic01 from '../../../pic/BannerTelangana.jpg';
import pic02 from '../../../pic/MuseumsTel.webp';
import pic03 from '../../../pic/PalacesTelanagana.jpg';
import pic04 from '../../../pic/WaterfallsTelangana.jpg';
import pic05 from '../../../pic/ramuji.jpg';
import pic06 from '../../../pic/templeTelanglana.jpg';
import { useNavigate } from 'react-router-dom';

const Feeds = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('userId');
    if (!user) {
      navigate('/form');
    }
  }, [])
  return (
    <>
      <div className={Styles.slidem} style={{ position: 'relative', zIndex: -1 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={pic01} className="carouselImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic02} className="carouselImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic03} className="carouselImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic04} className="carouselImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic05} className="carouselImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic06} className="carouselImg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={Styles.post}>
        <div className={Styles.left}>
          <Ad />
        </div>
        <div className={Styles.mid}>

          <RecipeReviewCard />

        </div>
        <div className={Styles.right}>
          <Ad />
        </div>
      </div>
    </>
  );
};

export default Feeds;
