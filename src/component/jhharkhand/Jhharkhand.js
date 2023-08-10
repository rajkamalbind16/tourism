import React,{useState} from 'react'
import Styles from "./jhharkhand.module.css"


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




const Jhharkhand = () => {
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
  <div className={Styles.text}><h1  >Adventure Tourism in Jharkhand .</h1></div>

  <div className={Styles.slidem}> 
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
      <h2>Tourism in Jharkhand .</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Jharkhand .</h3>
            <p>‘The Land of Forests’ as Jharkhand is famously called, is heaven for nature lovers. The unparalleled beauty of the state with majestic hills, scenic waterfalls, rich greenery and colorful culture makes your visit to the land memorable. Thanks to the dominant tribal population, the land preserves nature at its best. It is the perfect destination to land if you are looking for a rendezvous with nature.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>
            Jharkhand has a number of destinations known for generating the real sense of adventure for visitors. Many of the destinations – like Giridih, Parasnath and Satpahar hills – in the state possess lots of scope for many adventurous activities like paragliding, Water Sports & Parasailing Giridih, among other sports helping Adventure Tourism in Jharkhand get much popularity. Some of the most wanted destinations of Jharkhand Adventure Tourism are explained below </p>
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
        <img height="100%" width="100%" src='https://www.transindiatravels.com/wp-content/uploads/ranchi.jpg' />
       </div>
       <div>
       <h2> Raanchi Tourism</h2>
     
        <div className={Styles.textt}>
            <p>Ranchi, the capital of Jharkhand, is rightly called the City of Waterfalls. Blessed with the best of nature, Ranchi captivates your soul with authority. It is so rich in mineral resources that it is also called as the ‘Manchester of the East’. Here are the top attractions in Ranchi.

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
       <h3>Jamshedpur Tourism</h3>
       <div className={Styles.textt}>
        <p>Jamshedpur owns the pride of being home to Tata Steel, the first private iron and steel company in the country. With many industries, both small and large scale, flourishing here, it is indeed a surprise to see that the city has rich greenery and is environment friendly. Here are the leading attractions in Jamshedpur.</p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/jamshedpur.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/deoghar.jpg'/>
       </div>
       <div>
       <h3>Deoghar Tourism</h3>
        <div className={Styles.textt}>
    <p>Deoghar, the City of Temples, is a famous pilgrim spot for followers of Hinduism. This ancient town has many temples and some are located in scenic environment. Have a feel of the land regardless of the faith you believe in and you are sure to enjoy every moment of it. Here are some of the top attractions in the city.</p>
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
   <h3>  Hazaribagh</h3>
       <div className={Styles.textt}>
        <p>Hazaribagh, as its name suggests, is a land of flora and fauna. The name Hazaribagh means a thousand gardens and the city lives up to its name. Situated at an altitude of 2019 feet above sea level, the city is a well known health resort. Here are some top destinations in Hazaribagh.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://www.transindiatravels.com/wp-content/uploads/hazaribagh.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/dhanbad.jpg' />
       </div>
       <div>
       <h3>Dhanbad Tourism</h3>
        <div className={Styles.textt}>
            <p>Dhanbad, the ‘Coal Capital of India’, ranks 79th amongst the fastest growing cities in the world. While the city’s earlier history remains a mystery, its present development is no secret to the world as it lies at the center of the heart of the country’s richest coal fields. Here are the places to visit in Dhanbad. </p>
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
       Bokaro Tourism
       <div className={Styles.textt}>
        <p>Bokaro is famous for its steel and coal industries. The natural resources available here has turned the city into a leading industrial hub. It is however not all industries as it has its share of lush greenery too. Here are some top tourist spots in Bokaro.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/bokaro.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/giridih.jpg'/>
       </div>
       <div>
       <h3>Giridih Tourism</h3>
      
        <div className={Styles.textt}>
            <p>Giridih, called the ‘Land of Hills’ is also known as ‘The Land of Jain Pilgrims’. The highest peak of Jharkhand lies here. Being carved out from Hazaribagh, Giridih shares its history. The land abounds in mineral resources. It boasts of extensive forests too. Here are some leading attractions in Giridih.</p>
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
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/prabhat-niwas-netarhat.jpg'/>
       </div>
       <div>
       <h3> Queen of Chotanagpur Tourism</h3>
      
        <div className={Styles.textt}>
            <p>If you long to be amidst the richness of nature, Netarhat, Queen of Chotanagpur, is the right place for you. The tranquility in the air and scenic landscapes just blow your mind. The jungle covered hill station is the coolest place in the whole of Jharkhand. Here are the top tourist destinations in Netarhat</p>
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
        <img height="100%" width="100%"  src='https://www.transindiatravels.com/wp-content/uploads/palamu-fort.jpg'/>
       </div>
       <div>
       <h3>Palamu Tourism</h3>
      
        <div className={Styles.textt}>
            <p>Palamu has a rich past going by legends but authentic evidences are yet to be unearthed. The legends about the land are interesting and present a scenario of rich cultural background. Here are the leading attractions in Palamu.</p>
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
            <h3>About Jharkhand . Hill station</h3>
            <p>A complete list of Hill Stations located in Jharkhand which are surrounded with falls and jungle. Find the best time to visit, near tourist spots, landmark and how to reach. Most of these tourist spots are surrounded with natural jungle, water falls and picnic spot. If you know any other tourist spot which is located in Jharkhand state then dolet me know.

The hill stations feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best hill destinations in the state.</p>
        </div>
    
      </div>
      <br/>
      
      
      
      
       <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='https://www.hillstationboss.com/wp-content/uploads/2016/05/rock-garden-ranchi.jpg' />
       </div>
       <div>
       <h2> Ranchi Hill Station</h2>
     
        <div className={Styles.textt}>
            <p>Ranchi is a famous hill station and the capital of Jharkhand. Ranchi is popularly known as the ‘Manchester of the East’. This place is mainly famous for the beauty of its waterfalls but Ranchi Hill also offers a very beautiful view. At the base of Ranchi Hill, there is beautiful Ranchi Lake and at the top of the hill, there is a Lord Shiva temple. You can enjoy trekking and rock climbing here.</p>
<p>Landmark Place:
Ranchi Hill, Hudru Falls, Dasam Falls, Jonha Falls, Ranchi Lake, Pahari Mandir, Jagannath Temple, Birsa Zoological Park, Kanke Dam, Rock Garden, Deer Park..</p>
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
       <h3>Netarhat Hill Station</h3>
       <div className={Styles.textt}>
        <p>If you are looking for wild adventure trip in Jharkhand state then Netarhat is for you. It is the most famous hill station of the Jharkhand  state and is popularly known as the ‘Queen of Chhotanagpur’. Netarhat offers the view of beautiful chhotanagpur plateau covered with dense green forests. Lots of waterfalls add to its beauty. You can enjoy sunrise and sunset from the viewpoints here.</p>
<p>Landmark Place:
Magnolia Viewpoint, Upper and Lower Ghaghri Falls, Lodh Falls, Koel Viewpoint, Sadni Falls.</p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/betla-national-park-netarhat.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/parasnath-hill-in-giridih.jpg'/>
       </div>
       <div>
       <h3>Giridih Hill Station</h3>
        <div className={Styles.textt}>
    <p>Giridih is one of the most popular hill stations in Jharkhand. The literal meaning of Giridih is ‘The Land of Hills’. This place offers the highest peak of Jharkhand situated in Parasnath Hill. Beautiful colorful granite rocks and dense green forests add beauty of this place. Rare breeds of trees like Mahua, Shimul, Palash are visible here.</p>
<p>Landmark Place:
Parasnath Hill, Usri Falls, Madhuban, Khandoli Park, Jain Museum, Jharkhandi Dham.</p>
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
   <h3>   Ghatshila Hill Station</h3>
       <div className={Styles.textt}>
        <p>Ghatshila is a very popular hill station in Jharkhand situated in Purbi Singhbhum district of Jharkhand at the banks of Subarnarekha river. Galudih is the most famous place here where one artificial man-made beautiful dam is present named Burudi Dam. Bengali author Bibhutibhushan Bandyopadhyay’s house can be spotted here in Gourikunj..</p>
<p>Landmark Place:
Burudi Lake, Phuldungri Hills, Dharagiri Falls, Galudih Dam, Gourikunj, Rankini Mandir.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://www.hillstationboss.com/wp-content/uploads/2016/05/ghatshila-burudih-lake.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/hazaribagh-national-park.jpg' />
       </div>
       <div>
       <h3>Hazaribagh Hill Station</h3>
        <div className={Styles.textt}>
            <p>Hazaribagh is a very popular hill station in North Chhotonagpur in Jharkhand. The literal meaning of Jharkhand is ‘The City of a Thousand Gardens’. Green forest covered Kanheri Hills and rivers like Damodar and Konar add to this place’s beauty.</p>
<p>Landmark Place:
Kanheri Hill, Barso Pani Cave, Hazaribagh Lake, Hazaribagh National Park, Isco Rock Art, Konar Dam, Bhadrakali Temple.</p>
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
       <h3>Deoghar</h3>
       <div className={Styles.textt}>
        <p>Deoghar is a very popular hill station in eastern India situated in Santhal Parganas division of Jharkhand. It is a famous pilgrim spot for the Hindus. This place offers several number of temples where you can enjoy visiting if you are a religious person.</p>
<p>Landmark Place:
Baba Baidyanath Temple, Trikuta Hills, Satsanga Ashram, Mayurakshi River, Nandan Pahar, Hathi Pahar.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/deoghar.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/jubilee-park-jamshedpurjpg.jpg'/>
       </div>
       <div>
       <h3>Jamshedpur Hill Station</h3>
      
        <div className={Styles.textt}>
            <p>Jamshedpur is a hill station that is mainly famous for its Tata Steel organization. This city is popularly known as ‘Steel City’ or ‘Industrial Capital of Jharkhand’. Beautiful Dalma Hills range, Dimna Lake and Jubilee Park add to this place’s beauty.</p>
<p>Landmark Place:
Dalma Hills, Dimna Lake, Jubilee Park, Russi Modi Centre of Excellence, Tata Steel Zoological Park, Parsee Fire Temple.</p>
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
       <h3>Dhanbad Hill Station</h3>
       <div className={Styles.textt}>
        <p>Dhanbad is less known as a hill station and much known as the ‘Coal Capital of India’. If you want to enjoy more than just hills, forests, waterfalls and sanctuaries, then this place is suitable for you. You can visit colliery belts here to see the greatest industrialization of coal in India.</p>
<p>Landmark Place:
Dhangi Hills, Maithon Dam, Panchet Dam, Topchanchi Lake, Jharia Coal Mines, Bhatinda Falls.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/palamu-fort.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.hillstationboss.com/wp-content/uploads/2016/05/kiriburu-saranda-forest.jpg'/>
       </div>
       <div>
       <h3>Kiriburu Hill Station</h3>
      
        <div className={Styles.textt}>
            <p>Kiriburu is a small beautiful hill station situated in West Singhbhum district of Jharkhand. This place is more popularly known for its iron ores situated here by SAIL. Here you can see the amazing view of twin hills names Kiriburu and Meghataburu. Dense green Saranda forest adds to this place’s beauty.</p>
<p>Landmark Place:
Kiriburu Hill, Meghataburu Hill, Saranda Forest.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
      </div>}






      {/* religious places */}
     





      {religious && <div>
      
      
      <div className={Styles.abouta}>
      <div>
          <h3>About Jharkhand . Religious Places</h3>
          <p>If you are planning to visit a  Religious Places , then Jharkhand . can be the perfect getaway. This beautiful state has some of the most mesmerizing  Religious Places in the entire Indian subcontinent. These beautiful  Religious Places in Jharkhand . are a blessing to the tourists and all the local Jharkhand people, because they surely do help you get rid of the scorching city heat.

The  Religious Places feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best  Religious Places destinations in the state.</p>
      </div>
  
    </div>
    <br/>
    
    
    
    
     <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%" src='https://im.hunt.in/cg/jhar/About/Tourism/Religious-Spots//baidyanath%20temple.jpg' />
     </div>
     <div>
     <h2> Vaidyanatha temple</h2>
   
      <div className={Styles.textt}>
          <p>The Vaidyanatha temple, also called Baba Vaidyanath dham or Vaidyanath dham, is one of the twelve Jyotirlingas, the most revered places where Shiva lives. It is located in Deoghar in the Santhal Parganas division of the state of Jharkhand, India. It is a temple complex consisting of the main temple of Baba Baidyanath, where the Jyotirlinga is installed, and 21 other temples.[1]

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
     <h3>Baba Basukinath Dham Dhumka</h3>
     <div className={Styles.textt}>
      <p>This temple is around 42 kms. from Baba Baidyanath Dham.It is named so after 'Basuki' who is the king of cobras. The visit to Deoghar is considered incomplete if one does not visit Baba Basukinath who is 'aughar daani' --- one who fulfills all wishes.</p>
<p>Angrabari (40 kms. from Ranchi near Khunti): Also known as ''Amreshwar Dham'' nowadays, this temple complex houses temples of Lord Ganesha, Sita-Ram,Hanuman and Lord Shiva.</p>
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://im.hunt.in/cg/jhar/About/Tourism/Religious-Spots//basukinath%20temple.jpg'/>
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
      <img height="100%" width="100%"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Maa_Chhinnamasta_Temple.jpg/330px-Maa_Chhinnamasta_Temple.jpg'/>
     </div>
     <div>
     <h3>Chhinnamastika Temple</h3>
      <div className={Styles.textt}>
  <p>The main attraction of the Chhinnamasta (also known as Chinnamastika) temple is the headless deity of Goddess Chinnamasta which stands on the body of Kamadeva and Rati in the lotus bed. The Chhinnamasta temple is popular for its Tantrik style of architectural design. Apart from the main temple, there are ten temples of various gods and goddesses such as the Surya (Sun God), Hanuman and Lord Shiva.</p>

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
 <h3>   Jagannath Temple, Ranchi</h3>
     <div className={Styles.textt}>
      <p>Similar to the famous Jagannath Temple in Puri, Odisha, this temple is built in the same architectural style, although smaller, and similar to the Rath Yatra in Puri, an annual fair cum rath yatra is held at this temple in the month of Aashaadha, attracting thousands of tribal and non-tribal devotees[3] not only from Ranchi but also from neighbouring villages and towns and is celebrated with much pomp and vigor</p>

     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jagannath_Temple%2C_Ranchi.jpg/330px-Jagannath_Temple%2C_Ranchi.jpg'/>
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
      <img height="100%" width="100%"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Maa_Dewri_Mandir.jpg/330px-Maa_Dewri_Mandir.jpg' />
     </div>
     <div>
     <h3>Dewri Mandir</h3>
      <div className={Styles.textt}>
          <p>At the temple devotees tie yellow and red sacred threads on bamboo for the fulfilment of their wishes. Upon the fulfillment of their wishes, they again come to the temple and untie the thread. Dedicated to Solha Bhuji Goddess, an avatar of Goddess Durga, Dewri Mandir temple is located a little outside the main city of Ranchi. Spread over nearly two acres, this old temple in Ranchi also houses an idol of Lord Shiva here</p>

      </div>
     </div>
    </div>

    <br/>
    <br/>
    <br/>

    

    <br/>
    </div>}



    {/* Adventure */}





    {adventure && <div>
      
      
      <div className={Styles.abouta}>
      <div>
          <h3>About Jharkhand . Advanture to do</h3>
          <p>If you are planning to visit a Advanture  this summer, then Jharkhand . can be the perfect getaway. This beautiful state has some of the most mesmerizing  Advanture in the entire Indian subcontinent. These beautiful Advanture  in Jharkhand . are a blessing to the tourists and all the local Jharkhand people, because they surely do help you get rid of the scorching city heat.

The Advanture  feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best hill destinations in the state.</p>
      </div>
      <div>
          <h3>7Exciting Things To Do In Jharkhand . To Explore The State To The Fullest!</h3>
      

<p>Located in the eastern part of our subcontinent, Jharkhand, literally meaning “Land of Forests” is home to one of India’s richest flora and fauna. Its sobriquet amply justifies the presence of such a diverse ecosystem. Jharkhand was carved out of the southern part of the state of Bihar in 2000 and is situated on the Chota Nagpur plateau which gives this region its distinct landscape. Home to many rivers, scenic waterfalls, hill stations, old temples, and rich culture, there are loads of activities to do in Jharkhand to acquaint you with the magical experiences hidden up its crevices. Here are the 7 Best Things to do in Jharkhand which will make your much-awaited vacation worth it.</p>
      </div>
    </div>
    <br/>
    
    
    
    
     <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%" src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/Netarhat-400x229.jpg' />
     </div>
     <div>
     <h2> 1. Visit Netarhat</h2>
   
      <div className={Styles.textt}>
          <p>Known as the “Queen of Chotanagpur Plateau”, Netarhat is a hill station that provides a nice summer retreat to the local people. Netarhat is located in the Latihar district of Jharkhand and stands at a height of almost 1100 m. Netarhat is especially loved for its beautiful sunrise and sunsets during the summer months. The highest waterfall of Jharkhand- Lodh falls is present over here. In addition to that, the Mahuadanr Wolf Sanctuary is the only sanctuary in India especially made for the protection of wolves. Even the Netarhat Residential School is a popular place since it is one of the few modern ‘gurukuls’ remaining in India.

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
     <h3>2. Visit Betla National Park</h3>
     <div className={Styles.textt}>
      <p>The Betla National Park is a must-visit for anyone searching for the best things to do in Jharkhand since it carries the actual essence of Jharkhand – its wildlife. This park became one of the first parks to become a Tiger Reserve under Project Tiger in 1974. The trees usually consist of sal and bamboo and the animals include sloth bear, panther, wolf, jackal, hyena, large families of langurs, rhesus monkeys, Indian giant squirrels, mouse deer, sambar deer, porcupine, mongoose, etc. The birds over here include hornbill, peafowl, red jungle fowl, black partridge, white-necked stork, black ibis, swamp grey, quail, pied hornbill, etc.</p>
      
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/Betla-National-Park-400x229.jpg'/>
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
      <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/ancient-temples-400x229.jpg'/>
     </div>
     <div>
     <h3>3. Visit the ancient temples</h3>
      <div className={Styles.textt}>
  <p>Jharkhand is a place known for its old temples set up on the many hills spread across its landscape. One of them is the Pahari Mandir located in the heart of Ranchi city providing the spectators with a breathtaking landscape of the entire city. Shri Sammed Shikharji is the most important Jain pilgrimage site where 20 of the 24 Tirthankaras in Jaina tradition were supposed to have attained ‘moksha’. It is situated on the highest hill in Jharkhand- the Parasnath hill. Other temples include Baidyanath Dham, Rajrappa, Itkhori etc..</p>

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
 <h3>  4. Trek the Rajmahal Hills</h3>
     <div className={Styles.textt}>
      <p>Formed much before the Himalayas, Rajmahal hills in Jharkhand were formed during the Jurrassic age, a time when dinosaurs still roamed the earth. It is situated in the Santhal Pargana division of Jharkhand which forms its north eastern part. Having an average height of just 200-300 m these hills offer no challenge to the trekker, but are nevertheless, a sight to behold. These hills have plant fossils which are dated to be 68 to 145 million years old because of which this place attracts geologists and palaeobotanist from all over the world.</p>
 
     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/Rajmahal-Hills-400x224.jpg'/>
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
      <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/Scout-Ranchi-400x230.jpg' />
     </div>
     <div>
     <h3>5. Scout Ranchi from Tagore hill</h3>
      <div className={Styles.textt}>
          <p>After visiting the many waterfalls in and around Ranchi, you must visit the nearby Tagore Hill which is at a distance of around 4 kms from the city. The scenic sunrise and sunset from this spot makes it a great hangout place. There is a rich history surrounding this place. Before it was a hangout spot, it was the ashram of Rabindranath Tagore’s elder brother. In the colonial era two Indians were hanged over here for defying the Daltonganj Commissioner, Dalton.</p>
       
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
     <h3>6. Visit hidden the beautiful Waterfalls</h3>
     <div className={Styles.textt}>
      <p>Jharkhand is situated on the Chota Nagpur Plateau which marks the north-eastern part of the great Indian plateau which extends throughout the peninsular part of our country. Naturally, this provides the perfect setting for waterfalls as Jharkhand has a lot of rivers flowing through it. The table-land terrain of Jharkhand enables these rivers to have waterfalls at various places. Popular among them are Hundru Falls, Dassam Falls, Jonha Falls, Panch Gagh Falls etc.</p>
    
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/Waterfalls-400x229.jpg'/>
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
      <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2021/12/Jamshedpur-400x227.jpg'/>
     </div>
     <div>
     <h3>7. Inspect India’s first planned city:, Jamshedpur</h3>
    
      <div className={Styles.textt}>
          <p>Jamshedpur was the first industrial planned city in India set up by JRD Tata. This city has also been ranked as the cleanest one in India. There are a ton of activities to do in this city including visiting Jubilee Park, Dalma WildLife Sanctuary, Dimna Lake, Tata Steel Zoological Park, the Jamshedpur marine drives, Ghatshila, Jamshedpur Coin Museum and much more. Jamshedpur stands out in the eyes of the spectator owing to its symmetry and the fact that it was a planned city and visiting this place is one of the best things to do in Jharkhand</p>
     
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
    <h4>Other than the things mentioned above, there is a lot more things to do in Jharkhand .. It all depends on your location, where you are in Jharkhand . at the time when you are trying to explore things to do. There is also a famous Tirupati temple located in Jharkhand ., which needs to be mentioned. It’s a whole circuit including Tirumala Temple. Most places are like a day trip or a weekend getaway, so you can plan your trips to Jharkhand . accordingly.</h4>
    <br/>
    <br/>
    </div>}



    </>
  )
}

export default Jhharkhand