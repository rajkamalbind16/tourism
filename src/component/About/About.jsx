import React from "react";
import './About.css';

import AmazingT from './iconss/why1_hover.png';
import Discoer from './iconss/why2_hover.png';
import BookYourTip from './iconss/why3_hoverb.png';
import niceSupport from './iconss/why4_hoverbb.png';

import Aman from './picture/aman.jpeg';


const About = () =>{

        const flightLoading = 90;
        const hotelLoading =87;
        const carLoading = 60;
        const cruisesLoading = 55;
      
        const calculateProgressBarWidth = (loading) => {
          return {
            width: `${loading}%`,
          };
        };

return(
<div className="about-contain">

<h1>WHY WE ARE THE BEST</h1>
<p id="para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

<div className="div1">
    <div className="uarebest">
        <img src={AmazingT} alt="" className="AboutIconss"/>
        <h3>Amazing Travel</h3>
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>

    <div className="uarebest">
        <img src={Discoer} alt="" className="AboutIconss" />
        <h3>Discover</h3>
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>

    <div className="uarebest">
        <img src={BookYourTip} alt="" className="AboutIconss" />
        <h3>Book Your Trip</h3>
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>

    <div className="uarebest">
        <img src={niceSupport} alt="" className="AboutIconss" />
        <h3>Nice Support</h3>
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>

</div>

<div className="div2">
<h2>WHAT WE OFFER ?</h2>
<p id="para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
</div>

<div className="div3">
    <div className="bullet">
        <li id="bullets"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet; </li>
        <li id="bullets"> Option congue nihil imperdiet doming id quod mazim placerat facer; </li>
        <li id="bullets"> Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes; </li>
        <li id="bullets"> Investigationes demonstraverunt lectores </li>
    </div>

    <div className="line"></div>

    <div className="article">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    </div>
</div>

<div>
    <h1>ABOUT OUR COMPANY</h1>
    <p id="para">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
</div>

<div>
<h3>TRAVEL AGENCY</h3>
<p id="para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>

<div>
<div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(flightLoading)}>
          Flight: {flightLoading}%
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(hotelLoading)}>
          Hotel: {hotelLoading}%
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(carLoading)}>
          Car: {carLoading}%
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={calculateProgressBarWidth(cruisesLoading)}>
          Cruises: {cruisesLoading}%
        </div>
      </div>
</div>
</div>


<div>
<h1>OUR TEAM</h1>
<p id="para"> ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

<div className="OurTeam">
    <div>
        <img src={Aman} alt="" id="team"/>
       <h4>Aman</h4> 
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>

    <div>
        <img src={Aman} alt="" id="team"/>
       <h4>Aman</h4> 
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>
    
     <div>
        <img src={Aman} alt="" id="team"/>
       <h4>Aman</h4> 
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>

    <div>
        <img src={Aman} alt="" id="team"/>
       <h4>Aman</h4> 
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
    </div>
   

</div>
</div>

</div>
);
}
export default About;