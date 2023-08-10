import React,{useState} from 'react'
import Styles from "./bihar.module.css"


import pic01 from '../pic/BannerTelangana.jpg';
import pic02 from '../pic/MuseumsTel.webp';
import pic03 from '../pic/PalacesTelanagana.jpg';
import pic04 from '../pic/WaterfallsTelangana.jpg';
import pic05 from '../pic/ramuji.jpg';
import pic06 from '../pic/templeTelanglana.jpg';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";




const Bihar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mountain,setMountain]=useState(false);
  const [religious,setReligious]=useState(false)
  const [adventure,setAdventure]= useState(false)

  const handlePopular=()=>{
    setMountain(false)
    setIsVisible(true);
    setReligious(false)
    setAdventure(false)
  }
  const handleToggle = () => {
    setMountain(true)
    setIsVisible(false);
    setReligious(false)
    setAdventure(false)
  };
  const handleAdventure = () => {
    setAdventure(true)
    setMountain(false)
    setIsVisible(false);
    setReligious(false)
  };
  const handleReligious = () => {
    setReligious(true)
    setMountain(false)
    setAdventure(false)
    setIsVisible(false);
   
  };
  return (
    <>
    <div className={Styles.container}>
  <div className={Styles.main}>
  <div className={Styles.text}><h1  > Tourism in Bihar </h1></div>

  <div className={Styles.slidem} style={{position:'relative',zIndex:-1}}> 
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
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
  
      </Swiper>
      </div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Bihar </h2>
      <div className={Styles.about}>
        <div>
            <h3>About Bihar </h3>
            <p>In Ancient and Classical India, the area that is now Bihar was considered the centre of political and cultural power and as a haven of learning.[16] From Magadha arose India's first empire, the Maurya empire, as well as one of the world's most widely adhered-to religions: Buddhism.[17] Magadha empires, notably under the Maurya and Gupta dynasties, unified large parts of South Asia under a central rule.[18] Another region of Bihar, Mithila, was an early centre of learning and the centre of the Videha kingdom.[19][20]

However, since the late 1970s, Bihar has lagged far behind other Indian states in terms of social and economic development.[21] Many economists and social scientists claim that this is a direct result of the policies of the central government, such as the freight equalisation policy,[22][23] its apathy towards Bihar,[24] lack of Bihari sub-nationalism,[25] and the Permanent Settlement of 1793 by the British East India Company.[23] The state government has, however, made significant strides in developing the state.[26] Improved governance has led to an economic revival in the state through increased investment in infrastructure,[27] better healthcare facilities, greater emphasis on education, and a reduction in crime and corruption</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>
            Among all Indian states, Bihar is the one most intimately linked to the Buddha’s life, resulting in a trail of pilgrimages which have come to be known as the Buddhist circuit. The Buddhist trail begins at the capital city, Patna, where a noteworthy museum contains a collection of Hindu and Buddhist sculptures as well as a terracotta urn said to contain the ashes of Lord Buddha.

The Buddha spent five years at Rajgir after having attained enlightenment, and many of the remains at Rajgir commemorate various incidents related to life of Buddha, the hill of Gridhrakuta being perhaps the most important, as this is where the Buddha delivered most of his sermons. Bodhgaya is the spot where Lord Buddha attained enlightenment, with the Mahabodhi Temple marking the precise location. </p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className={Styles.places}>
      <button onClick={handlePopular}>Popular Places</button>
     <button onClick={handleToggle}>Hill Stations</button>
     <button onClick={handleReligious}>Religious Places</button>
     <button onClick={handleAdventure}>Adventure Places</button>
      </div>
      <hr/>
    </div>



    <br/>
      <br/>
      <br/>
    <br/>
      <br/>
      <br/>
      {isVisible && <div> 
        <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='https://www.transindiatravels.com/wp-content/uploads/nalanda-university-1.jpg' />
       </div>
       <div>
       <h2> Nalanda University</h2>
     
        <div className={Styles.textt}>
            <p>Nalanda University was established during the 5th century A.D. The university is consiNalanda University was established during the 5th century A.D. The university is considered the first residential university ever in the world. The university stands proof for the prominent role played by India in imparting knowledge. The university had 2000 teachers who taught over 10000 students from all parts of the world. The uniqueness of the place could be gauged by the fact that Buddha himself was a teacher here and Hieun-Tsang, Chinese traveler and a great scholar, was a student of this university. Red rocks were used in the construction, which is built in Kushana style of architecture.

</p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       <h3>Bhodhi Tree</h3>
       <div className={Styles.textt}>
        <p>Bodhi Tree is located about 100 km from Patna. Buddha achieved enlightenment under this tree and hence it is a pilgrim center for Buddhists who hail from all parts of the world. The place where it is situated has been declared a World Heritage Site by UNESCO.  On your visit to Bodhi Tree, you will find Maha Bodhi Temple, which is sacred to those who follow Buddhism. The architecture of the temple goes to show the richness and grace of Indian architecture. </p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/bodhi-tree-1.jpg'/>
       </div>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/griddhakuta-peak-1.jpg'/>
       </div>
       <div>
       <h3>Griddhakuta Peak</h3>
        <div className={Styles.textt}>
    <p>Griddhakuta Peak is famously known as the vulture peak. Located in Rajgir, the peak resembles the shape of vulture and it is frequented by vultures in great numbers. Buddha delivered some of his famous sermons here and hence it is considered sacred for Buddhists. The steps formed by cutting rocks lead you to two caves that are naturally formed. For those who find the trip physically challenging, chairlift facilities are available to reach the hilltop.</p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
   <h3>   Rajgir Hot Springs</h3>
       <div className={Styles.textt}>
        <p>Hot springs in Rajgir are famous tourist spots. Located at the foot of Vaibhava Hills, the springs get their water from Saptadhara, which passes behind Saptaparni Caves. The hot springs are considered to possess medicinal properties. Among the hot springs, Brahmakund spring is the hottest and has a temperature of 450 Celsius. It is believed that Lord Buddha and Mahavira had bathed in these hot springs.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://www.transindiatravels.com/wp-content/uploads/rajgir-hot-springs-1.jpg'/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/hieun-tsang-memorial-hall.jpg' />
       </div>
       <div>
       <h3>Hieun Tsang Memorial Hall</h3>
        <div className={Styles.textt}>
            <p>Built in memory of the famous Chinese scholar and traveler Hieun Tsang, the construction is rich in architecture. Hieun Tsang spent more than 12 years in this place on his visit to India. This was the place where Hieun Tsang learnt yoga under the guidance of Acharya Shil Bhadra. The famous traveler has thrown light on medieval India and Nalanda, which are found in the memorial hall. </p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       Jalmandir Temple
       <div className={Styles.textt}>
        <p>Jalmandir Temple is situated in the middle of a lake, which is full of lotuses. King Nandivardhan, who was the elder brother of Lord Mahavira is said to have constructed the temple. The temple is in the shape of a Vimana. The place where Lord Mahavira attained Samadhi and the place he was cremated are marked in the temple. The 600 ft long bridge made of stone connects the temple to the banks of the pond.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/jal-mandir-1.jpg'/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/patna-museum-1.jpg'/>
       </div>
       <div>
       <h3>Patna Museum</h3>
      
        <div className={Styles.textt}>
            <p>Patna Museum was constructed in 1917. The building is a blend of Rajput and Mughal architecture, it is one of the most popular places in Patna. The museum houses archaeological objects, paintings, sculptures and images by artists belonging to Hinduism and Buddhism. The museum also has a 200 million old fossil of a tree. At 12 noon every day, you can view picture source associated to culture. You will find the museum to provide information on the culture and tradition of the place. The museum remains closed on Mondays.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/></div>}








      {/* //Mountain */}
      {mountain && <div>
      
      
        <div className={Styles.abouta}>
        <div>
            <h3>About Bihar  Hill station</h3>
            <p>If you are planning to visit a hill station this summer, then Bihar  can be the perfect getaway. This beautiful state has some of the most mesmerizing hill stations in the entire Indian subcontinent. These beautiful hill stations in Bihar  are a blessing to the tourists and all the local Bihari people, because they surely do help you get rid of the scorching city heat.

The hill stations feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best hill destinations in the state.</p>
        </div>
        <div>
            <h3>Top 9 Hill Stations In Bihar</h3>
            <p>
            Bihar is known for its strong foundation in Buddhism and Jainism and its contribution to highlighting the religion globally. The city of Pataliputra (modern Patna) serves as a symbol of glory and kingship in ancient India. With an abundance of exemplary tourist spots, including some notable hill stations in Bihar, this state's scenic beauty attracts travellers worldwide.

The geographical presentation of this state shares borders with Nepal in the North, Jharkhand in the South, West Bengal in the East and Uttar Pradesh in the West.



</p>
        </div>
      </div>
      <br/>
      
      
      
      
       <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='http://holidayrentals.co.in/images/2016/brahmajuni.jpg' />
       </div>
       <div>
       <h2>Brahmajuni Hill:</h2>
     
        <div className={Styles.textt}>
            <p>Brahmajuni Hill, also known as Brahmayoni, is located in the Gaya district of the State. This is situated 1 km south-west of Vishnupad Temple. This is a famous ancient temple dedicated to Lord Vishnu. It is believed that the temple is built over the footprints of Lord Vishnu. The hill top is an important tourist spot which gives a fascinating view of the Gaya town and can also enjoy the magnificent view of the temple. To reach the top of the hill there are a flight of one thousand stone steps.

</p>

        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       <h3>Ramshila Hill:</h3>
       <div className={Styles.textt}>
        <p>Ramshila Hill is situated 5 kms from the Vishnupad Temple in Gaya. This is one of the most sacred hills of the district, with considerable antiquity. You can find here a number of beautiful stone sculptors doted in the hill. The main tourist attraction here is the Ramesvara or Patalesvara temple located on the hill. . It is believed that Lord Ram had offered 'pinda' on the hill and so with that belief, 'Pindas' are offered by Hindu devotees during Pitripaksha for their ancestors here. There is also a temple dedicated to Lord Ram, Sita and Hanuman.</p>

       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='http://holidayrentals.co.in/images/2016/ramshila.jpg'/>
       </div>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='http://holidayrentals.co.in/images/2016/pretshila.jpg'/>
       </div>
       <div>
       <h3>Pretshila Hill:</h3>
        <div className={Styles.textt}>
    <p>Pretshila Hill is situated at about 10 kms from the Ramshila hill. The place is about 12 kms from Gaya. Below this beautiful hill is the Brahma Kund Lake, where pilgrims take bath and offer Pind Dan, a ritual done to satisfy the departed souls of ancestors and parents. At the top of the hill is a beautiful Ahilya Bai Temple built in unique architectural style and with magnificent sculptures.</p>

        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
   <h3>  Gurpa Peak:</h3>
       <div className={Styles.textt}>
        <p>It is said that when Maha Kassapa, the successor of Lord Buddha was approaching the end of his life, he climbed to the summit of the peak. He struck the towering rocks which obstructed the way and rocks parted to make way for him. He then entered the cleft thus created and meditated there and the rocks closed around him. It is believed that Maha kassappa is still awaiting the arrival of the Maithreya or the future Buddha who will deliver the message of Lord Buddha to mankind. Now the place has developed into a major pilgrimage centre due to its association with Maha Kassapa. There is a steep path from the foot of the mountain that leads to the base of a sheer cliff. This cliff is famous for a huge narrow crack..</p>
<p>Must see places in Lambasingi: Kothapally Waterfalls, Hope Island</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='http://holidayrentals.co.in/images/2016/gurpa.jpg'/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='http://holidayrentals.co.in/images/2016/pragbodhi.jpg' />
       </div>
       <div>
       <h3>Pragbodhi: </h3>
        <div className={Styles.textt}>
            <p>Pragbodhi Mountain is located in Gaya district. This place is also known as Dhungeswara and is very close to Kiriyama village. The word ‘Pragbodhi’ literally means ‘prior to enlightenment’. It is said that, Lord Buddha had stayed in one of the caves in this mountain before attaining enlightenment. The main tourist attraction here is a small temple, run by Tibetan monks. You can also find a number of ancient stupas on the top of the mountain.</p>

        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
    
      <br/>
      <br/>
      </div>}






      {/* religious places */}
     





      {religious && <div>
      
      
      <div className={Styles.abouta}>
      <div>
          <h3>About Bihar  Religious Places</h3>
          <p>If you are planning to visit a  Religious Places , then Bihar  can be the perfect getaway. This beautiful state has some of the most mesmerizing  Religious Places in the entire Indian subcontinent. These beautiful  Religious Places in Bihar  are a blessing to the tourists and all the local Bihari people, because they surely do help you get rid of the scorching city heat.

The  Religious Places feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best  Religious Places destinations in the state.</p>
      </div>
     
    </div>
    <br/>
    
    
    
    
     <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%" src='https://images.thrillophilia.com/image/upload/s--JFopzF4i--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/232/original/1622039616_shutterstock_693514612.jpg.jpg' />
     </div>
     <div>
     <h2> Mahabodhi Temple</h2>
   
      <div className={Styles.textt}>
          <p>A UNESCO World Heritage Site, the Mahabodhi Temple was built back in the 3rd century BC. Offering one of the best Buddhist religious experiences in Bihar, the Mahabodhi Temple is constructed at the same place, where Gautama Buddha attained enlightenment.
 
 Considered to be a sculptural masterpiece, the temple is built using only bricks. The sacred Bodhi tree is located on the western side of this temple. The important attractions in the Mahabodhi Temple include the 55 meters high tower and the gold-painted statue of Gautama Buddha in the 'Bhumisparsa Mudra'.

</p>
<p>Location: Bodh Gaya, Bihar 824231</p>
      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>Takht Sri Harmandir Sahib Ji</h3>
     <div className={Styles.textt}>
      <p>Built back in 1839, Takht Sri Harmandir Sahib Ji is one of the most important religious places in Bihar for the sikhs. This majestic gurudwara was built to commemorate Guru Gobind Singh, who was born here back in 1666.This place has also been visited by the revered sikh gurus, Guru Tegh Bahadur and Guru Nanak.

Believed to be one of the most sacred of the 5 takhts, Takht Sri Harmandir Sahib Ji also shelters some of the personal belongings of Guru Gobind Singh, including his ‘pangura’, sandals, sacred sword, and 4 iron arrows. It also preserves the holy book that has the ‘Hukamnamas’, which is the set of orders written by Guru Tegh Bahadur and Guru Gobind Singh.</p>
<p>Location: Takhat Sri Harimandir ji, Patna Sahib, Patna, Bihar 800008</p>
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--qo3ijYZT--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/224/original/1622099043_8._TAKHT_SHRI_HARIMANDIR_JI_PATNA_SAHIB_PATNA.jpg.jpg'/>
     </div>
    </div>


    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--1U7tB_Pe--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/228/original/1622100500_16._Vishnupada_Mandir_Gaya.JPG.jpg'/>
     </div>
     <div>
     <h3>
Vishnupad Temple</h3>
      <div className={Styles.textt}>
  <p>One of the most-visited religious places in Bihar, Vishnupad Temple is an ancient temple dedicated to the Hindu god, Lord Vishnu. Perched on the serene banks of the Falgu river, this temple has the footprint of Lord Vishnu to incised into a block of basalt.

According to popular beliefs this footprint was incised, when Lord Vishnu put his right foot on the chest of Gayasur and buried him below the surface of the earth. Although the real facts of the construction of Vishnupad Temple is still unknown, the present body of the shrine is believed to have been built in 1787 by Devi Ahilya Bai Holkar.</p>
<p>Location: Vishnupad Temple is located in Gaya, Bihar on the bank of the river Phalgu.</p>
      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
 <h3>   Thai Monastery</h3>
     <div className={Styles.textt}>
      <p>Established back in 1957 by Buddhist monks and the Government of Thailand, the Thai Monastery aims at propagating the preachings of Lord Gautama Buddha and strengthening the friendly relationship between Thailand and India.
 
 One of the most revered buddhist religious places in Bihar, the Thai Monastery flaunts a typical Thai-style architecture. The roof of this monastery is covered with golden tiles and the interior is adorned beautifully with small sculptures of Lord Buddha. The main prayer hall of the monastery houses a 25 meters tall seated Buddha statue.</p>
<p>Location: Near Buddha Statue, Bodh Gaya, India</p>
     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://images.thrillophilia.com/image/upload/s--Vxrn2-R---/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/225/original/1622038170_shutterstock_1425657557.jpg.jpg'/>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--7gPdbIQh--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/237/original/1622091628_shutterstock_402120709.jpg.jpg' />
     </div>
     <div>
     <h3>Tibetan Monastery</h3>
      <div className={Styles.textt}>
          <p>Lying close to the Mahabodhi Temple, the Tibetan Temple and Monastery was built in Bodhgaya back in 1938. This monastery flaunts an impressive architecture, which is adorned beautifully with Tibetan scriptures as well as Buddhist symbols. The monastery is home to a 10 meters tall red and golden painted dharmachakra (Wheel of Law).

According to popular beliefs, rotating the dharmachakra three times in a clockwise direction can free you from all your sins. You can also see the picture of Maitreya Buddha at this monastery, which is believed to be the future incarnation of Gautama Buddha.</p>
<p>Location: Bodh Gaya, Bihar 824231</p>
      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>Royal Bhutan Monastery</h3>
     <div className={Styles.textt}>
      <p>Lying in Bodh Gaya, the Royal Bhutan Monastery was built here by the King of Bhutan as a token of tribute to Gautama Buddha. This monastery features impressive clay carvings that represent various instances from the life of Lord Buddha. Flaunting the traditional Bhutanese architectural design, this monastery houses a temple and a common restroom for the monks.

The temple is home to a 7 feet tall Buddha statue, with various Buddhist scriptures and symbols inscribed on it.  The Royal Bhutan Monastery also features a visitors’ guesthouse with a total of 15 well-kept rooms.</p>
<p>Location: Situated beside Wat Thai Bodhgaya, the Royal Bhutan Monastery is just 500 m away from Giant Buddha Statue, and 1 km from Bodhgaya Bus Station.</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--nKUO4jdw--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/240/original/1622091962_shutterstock_1575833554.jpg.jpg'/>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--fBRowFGV--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/226/original/1629096707_Jal_Mandir-A7307057.JPG.jpg'/>
     </div>
     <div>
     <h3>Jal Mandir</h3>
    
      <div className={Styles.textt}>
          <p>Situated in Pawapuri, the Jal Mandir is dedicated to the 24th Tirthankara and founder of Jainism, Lord Mahavira, Jal Mandir is one of the highly esteemed religious places in Bihar for jains. Perched amidst a huge water tank packed with beautiful lotus flowers, Jal Mandir signifies the site of the cremation of Lord Mahavira as he attained Nirvana in Pawapuri in 527 BC.
 
 Believed to have been constructed by the elder brother of Lord Mahavira, King Nandivardhan, this marble temple worships the “Charan Paduka '' of the lord.</p>
<p>Location: Pawapuri, Bihar 803115</p>
      </div>
     </div>
    </div>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>Patan Devi Temple</h3>
     <div className={Styles.textt}>
      <p>Known locally as “Maa Patneshwari Mandir”, Patan Devi Temple happens to be one of the oldest religious and most sacred places in Bihar. Dedicated to the Hindu goddess, Maa Durga, and originally known as Sarvanand Kari Patneshwari. Patan Devi Temple is considered to be one of the country’s 51 Siddha Shakti Pithas in India.
 
 According to age-old mythological beliefs, this temple has been built on the same site, where the right thigh of goddess Sati fell.
  </p>
<p>Location: Badi patan devi mandir, Sadikpur, Patna, Bihar 800007</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--cgLliNPJ--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/227/original/1629096838_image_%286%29.png.jpg'/>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--y_yBCl-D--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/233/original/1622039643_shutterstock_481643158.jpg.jpg'/>
     </div>
     <div>
     <h3>Nalanda Mahavira</h3>
    
      <div className={Styles.textt}>
          <p>The ancient Mahavihara was a Buddhist monastery that also became an important center of learning during the reign of the Magadha empire. The Mahavihara was counted among the world’s greatest educational centers between the fifth century CE and 1200 CE.
 
 During this period, the Mahavihara received much fame and recognition and achieved a legendary status. It was also visited by the Chinese pilgrims and philosophers Faxian, Xuanzang, and Yijing. At the present day, the Mahavihara is in ruins and has been declared as a UNESCO World Heritage Site. </p>
<p>Location: This university is located in the Nalanda district of Bihar and the present campus is 100 km away from the metropolis of Patna.</p>
      </div>
     </div>
    </div>
    <br/>
    <br/>
    <br/>

    
    
   
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>Chotti Dargah</h3>
     <div className={Styles.textt}>
      <p>Situated at a small distance of around 30 kilometers from the heart of Patna, Chotti Dargah is a 3-storey mausoleum of the revered Muslim saint Makhdum Shah Daulat. This dargah stands on the site, where the saint was buried back in 1616.
 
 Flaunting an impressive architecture, the Chotti Dargah was built by Ibrahim Khan in 1619. The dargah is adorned by a gigantic dome with its ceiling carved with holy texts from the Quran. You can also see a huge water tank, perched in front of the dargah.</p>
<p>Location: Chotti Dargah is located in the Maner Sharif in Patna Metropolitan Region, which is about 30km outside of Patna on NH-30</p>
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--hJmvI9rk--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/229/original/1629096718_Maner_Sharif-7304822.JPG.jpg'/>
     </div>
    </div>


    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://images.thrillophilia.com/image/upload/s--u_jKQT7_--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/373/230/original/1622100938_1536135454-darjeeling.jpg.jpg'/>
     </div>
     <div>
     <h3>Vishwa Shanti Stupa, Vaishali</h3>
      <div className={Styles.textt}>
  <p>Excavated back in 1969, the 125 feet tall Vishwa Shanti Stupa is known to offer one of the best religious experiences in Bihar. This has been built by Nipponzan Myhoji and Rajgir Buddha Vihar Society, the magnificent white stupa sits in a pool of lush green expanses.

The stupa is adorned beautifully by the coronation tank of sacred water, also known as Abhishek Pushkarni. On the north bank of this pond, you will find an intriguing museum, which exhibits important excavated items, including cast coins, earthen wares, copperware, ironware, and terracotta human & animal figurines.</p>
<p>Location: Vaishali, Bihar</p>
      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
 <h3> Vishwa Shanti Stupa, Rajgir</h3>
     <div className={Styles.textt}>
      <p>One of the most important religious and Buddhist monuments in Bihar, the Vishwa Shanti Stupa is a place which aims to spread love and peace among the people. Located at an elevation of 400 m above the sea level, this stupa overlooks the beautiful forest covers from above.

Reaching the Vishwa Shanti Stupa is an adventure in itself as you can choose from a variety of options. If you are looking for some fun then you can opt for the ropeway and can enjoy a fun ride to the top. Alternatively, you can take the spiral staircase and climb the stairs for some thrill. </p>
<p>Location: Vishwa Shanti Stupa Rd, Rajgir, Bihar 803121</p>
     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://images.thrillophilia.com/image/upload/s--nUQfxStL--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/375/506/original/1630063790_1618308482_2._Vishwa_Shanti_Stupa.png.jpg.jpg'/>
     </div>
    </div>

   
    <br/>
    </div>}



    {/* Adventure */}





    {adventure && <div>
      
      
      <div className={Styles.abouta}>
      <div>
          <h3>About Bihar  Advanture to do</h3>
          <p>If you are planning to visit a Advanture  this summer, then Bihar  can be the perfect getaway. This beautiful state has some of the most mesmerizing  Advanture in the entire Indian subcontinent. These beautiful Advanture  in Bihar  are a blessing to the tourists and all the local Bihari people, because they surely do help you get rid of the scorching city heat.

The Advanture  feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best hill destinations in the state.</p>
      </div>
     
    </div>
    <br/>
    
    
    
    
     <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%" src='https://www.clearholidays.com/hbimages/activities/images/animal_safari.jpg' />
     </div>
     <div>
     <h2> Animal Safari </h2>
   
      <div className={Styles.textt}>
          <p>Rajgir Zoo Safari was opened on 16 February 2023 for people. This zoo safari has been developed by the forest department for the conservation of animals. You will interact with a variety of species like Hod Deer, Wild Boar, Hog Deer, Sloth Bear, Chital, Sambar, Indian Leopard, Asiatic Lion, and Royal Bengal Tiger. There is a digital butterfly zone which is a 180-degree 3D theater. There is no cage for animals because they are free in the forest. You can watch wild animals in a secure environment-friendly. You no need to worry about wild animals.

</p>

      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>Burma Bridge</h3>
     <div className={Styles.textt}>
      <p>Traveling through Burma, its forces were stopped at Kohima and Imphal by British and ... Northeast India is also the home of many living root bridges.</p>
 
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://www.clearholidays.com/hbimages/activities/images/burma_bridge.jpg'/>
     </div>
    </div>


    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://www.clearholidays.com/hbimages/activities/images/cycling.jpg'/>
     </div>
     <div>
     <h3> Cycling </h3>
      <div className={Styles.textt}>
  <p>Cycling, also, when on a two-wheeled bicycle, called bicycling or biking, is the use of cycles for transport, recreation, exercise or sport.</p>


      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
 <h3> Glass bridge</h3>
     <div className={Styles.textt}>
      <p>In a bid to boost tourism in the state, Bihar has built an interesting 200 ft glass bridge which will be inaugurated next year in Rajgir, Nalanda district. Set amid five hills, the bridge will offer adventure seekers the much-needed thrill. With this glass bridge, the state is hoping to increase the footfall of both domestic and international visitors. </p>

     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-RIgq5ZMxsT0jiCZQBr5Wl6VPIe-mBQT4V4pKDp6PQ&s'/>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://www.clearholidays.com/hbimages/activities/images/gliding.jpg' />
     </div>
     <div>
     <h3>Paragliding</h3>
      <div className={Styles.textt}>
          <p>Paragliding is a type of extreme sport found in the early 1980s by people interested in aerial sports, and it allows one to run off the slopes with free parachutes. Paragliding is generally more accessible than other extreme sports since it does not require a special take off or a landing track.</p>
          
      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>Jeep Safari</h3>
     <div className={Styles.textt}>
      <p>The zoo safari has been developed by the Department of Environment, Forest and Climate Change, Govt of Bihar at a cost of nearly ₹177 crore (US$22 million). The zoo safari is spread over 191 hectares (470 acres) and has five zones namely Herbivore Safari, Bear Safari, Leopard Safari, Tiger Safari and Lion Safari which accommodate over 250 herbivores and carnivores.</p>
  
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://www.clearholidays.com/hbimages/activities/images/jeep_safari.jpg'/>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%"  src='https://www.clearholidays.com/hbimages/activities/images/zip_lining.jpg'/>
     </div>
     <div>
     <h3>Zip Lining</h3>
    
      <div className={Styles.textt}>
          <p>Subdivision is an administrative unit below district level and above the block level in every state of India. A district may have one or more subdivisions.</p>
        
      </div>
     </div>
    </div>
    <br/>
   
    

   
    </div>}



    </>
  )
}

export default Bihar