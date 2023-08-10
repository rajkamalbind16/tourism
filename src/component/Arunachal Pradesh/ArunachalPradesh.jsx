import React from 'react';
import './ArunachalPradesh.css';

import auroTemple from './aurnchalpic/temple.jpg';
import aurowaterfall from './aurnchalpic/Nuranang-Falls_2nd-mar.webp';
import auroForst from './aurnchalpic/forest.jfif';
import auroMoutain from './aurnchalpic/mountain.jfif';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";


const ArunachalPradesh = () => {
  return (
    <>
<div style={{position:'relative',zIndex:-1}}>
    <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
          
            modules={[Autoplay]}
            className="mySwiperArunchal"
          >
            <SwiperSlide><img src={auroTemple} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={aurowaterfall} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={auroForst} className='carouselImg' /></SwiperSlide>
            <SwiperSlide><img src={auroMoutain} className='carouselImg' /></SwiperSlide>

            
      
          </Swiper>  </div>
        
        
        <div className='banner11'>
            <p className='tourTitles'>Tourism to Arunanchal Pradesh</p>
        </div>
        <div>
            <article class="arunachalnewspaper">
            Arunanchal Pradesh - A very Heart of !ncredible India, is a blend of history and modernization. Plan a trip to ArunanchalPradesh to witness the Vast Species of wildlife in National Parks and Wildlife Santuries, religious Places and heritage locations. The state is a complete package of attractions that are spotted in different parts of India. People who want to see the diverse side of India, ArunanchalPradesh is a must visit.
    
    We Offer different Tour Packages of Arunanchal Pradesh like MP Wildlife Tour Packages, MP Heritage Tours, MP Pilgrimage Tours, MP Educational Tour Packages, MP Tribal and Cultural Tours, The Tour Itinerary for best of Mp Tour Packages Start from 07 Nights/ 08 Days and are upto 19 Nights / 20 Days. We have our Own Fleet of vehicles to cater the same, We also provide information of MP tourist places, Mp tour & Travel itineraries, Mp travels, Mp tours, tours and travels in ArunanchalPradesh as a complete Travel Guide of ArunanchalPradesh. ArunanchalPradesh is having 03 World Heritage sites named Khajuraho Sanchi and Bhimbetka Caves.
    </article>
        </div>
    
        <div>
            <p className='catogoryTitle'>Popular area to visit in Arunanchal Pradesh</p>
            
            <div className='arunachalcatogaryDiv'>
                <img src={auroTemple} alt="" className='arunachalimages'/>
                <p className='textarunachalCat'>Temples: Lingaraja Temple, Khajuraho Temple, Konark Sun Temple, Ramanathaswamy Temple, Sree Padmanabhaswamy Temple, Shri Kashi Biswanath Temple, Somnath Mandir, </p>
            </div>
    
            <div className='arunachalcatogaryDiv'>
                <p className='textarunachalCat'>Mountain:Kangtö,Nyegyi Kansang,Chiumo,Hkakabo Razi,Namjagbarwa Peak,     </p>
                <img src={auroMoutain} alt="" className='arunachalimages'/>
    
            </div>
    
            <div className='arunachalcatogaryDiv'>
            <img src={aurowaterfall} alt="" className='arunachalimages' />
                <p className='textarunachalCat'> Waterfalls: The Nuranang Waterfall, the Bap Teng Kang Waterfall , the Sirki Waterfalls,Ranganadi Dam,Subansiri Lower Dam  </p>
            </div>   
    
            <div className='arunachalcatogaryDiv'>
    
                <p className='textarunachalCat'>
                Wild Life: Namdapha National Park & Tiger Reserve,Mouling National Park,Itanagar wildlife sanctuary,Dibang wildlife,The Mehao Wildlife Sanctuary,The Pakke Tiger Reserve,</p>
                <img src={auroForst} alt=""className='arunachalimages' />

    
            </div>
        </div>
 
        
        </>
  )
}

export default ArunachalPradesh