import React from 'react';
import './Nagaland.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";


import nagaTemple from './nagapic/nagalandTempe.jpg';
import nagaVill from './nagapic/village.jpg';
import nagaDam from './nagapic/lake.jpg';
import nagaForest from './nagapic/forest.jpg';
import nagaMountain from './nagapic/moutainss.jpg';


const Nagaland = () => {
  return (
    <>

    <Swiper style={{position:'relative',zIndex:-1}}
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
            <SwiperSlide><img src={nagaTemple} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={nagaVill} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={nagaDam} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={nagaForest} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={nagaMountain} className='carouselImg' /></SwiperSlide>

            
      
          </Swiper>
        
        
        <div className='banner12'>
            <p className='tourTitles'>Tourism to Nagaland</p>
        </div>
        <div>
            <article class="Nagalandnewspaper">
            The present generation of Nagas have ventured into fashion designing in a big way, reproducing fabrics that represent the ancestral motifs blended with modern appeal. Indeed, it is a beautiful mix of the past with the present,a paradise for those who are into fashion designing. This is an affluent fashion station of the East.

The traditional ceremonial attire of each tribe is in itself, an awe inspiring sight to behold; the multicoloured spears and daos decorated with dyed goats hair, the headgear made of finely woven bamboo interlaced with orchid stems, adorned with boar's teeth and hornbill's feathers, elephant tusk armlets. In days of yore every warrior had to earn each of these items through acts of valour, to wear them.

Nature could not have been kinder to Nagaland, sometimes referred to as the Switzerland of the East; the exquisitely picturesque landscapes, the vibrantly colourful sunrise and sunset, lush and verdant flora, this is a land that represents unimaginable beauty, moulded perfectly for a breath taking experience.

Its people belong to the Indo-Mongoloid stock, whose ancestors lived off nature's abundant gifts, blessed with sturdy formidable dispositions. Above all, the people here are warmhearted and extremely hospitable.</article>
        </div>
    
        <div>
            <p className='catogoryTitle'>Popular area to visit in Nagaland Pradesh</p>
            
            <div className='NagalandcatogaryDiv'>
                <img src={nagaTemple} alt="" className='Nagalandimages'/>
                <p className='textNagalandCat'>Temples: Shiv Temple,Dimapur Jain Temple,Dimapur Kalibari,Kalibari Temple,Durgabari Mandir Kohima. </p>
            </div>
    
            
    
            <div className='NagalandcatogaryDiv'>
            <img src={nagaDam} alt="" className='Nagalandimages' />
                <p className='textNagalandCat'> Waterfalls & Dam: Phek Waterfall,Koyna Dam,Rihand Dam,Tehri Dam,Bhakra Dam,Linganamakki dam,Tungabhadra Dam,Nagarjuna Sagar Dam,Vaigai Dam,Kallanai Dam  </p>
            </div>
    
            <div className='NagalandcatogaryDiv'>
                <p className='textNagalandCat'>
                Village:Kohima,Mokokchung,Dimapur,Dzükou Valley,Wokha,Khonoma,Tuophema,Longleng,Chumukedima</p>
                <img src={nagaVill} alt=""className='Nagalandimages' />
    
            </div>
    
    
            <div className='NagalandcatogaryDiv'>
            <img src={nagaForest} alt=""className='Nagalandimages' />
    
                <p className='textNagalandCat'>
                Wild Life: 	Kigwema Community Reserve,D. Khel Kohima Community Reserve,Mezoma Community Reserve,Dihoma Community Reserve
                </p>
    
            </div>
        </div>
        
        </>
  )
}

export default Nagaland
