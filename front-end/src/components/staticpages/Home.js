/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import "./staticpages.css";

import Header from "../partials/Header"
import Footer from "../partials/Footer"
import promo1 from "../staticpages/staticpagesimages/Car1.jpg";
import promo2 from "../staticpages/staticpagesimages/Car2.jpg";
import promo3 from "../staticpages/staticpagesimages/Car3.jpg";
import cardf from "../staticpages/staticpagesimages/WomenBannerHome.jpg";
import cardm from "../staticpages/staticpagesimages/MenBannerHome.jpg";
import promo4 from "../staticpages/staticpagesimages/MenWomen.png";

const Home= () => {

  return (
    <div>
    <div><Header/></div>
     
      <div>
      <Carousel>
        <Carousel.Item>
        
            <img className="d-block w-100" src={promo1} alt="First slide" />
       
        </Carousel.Item>
        <Carousel.Item>
         
            <img className="d-block w-100" src={promo2} alt="Second slide" />
       
        </Carousel.Item>
        <Carousel.Item>
          <a href="/women-section">
            <img className="d-block w-100" src={promo3} alt="Third slide" />
          </a>
        </Carousel.Item>
      </Carousel>

      <div>
        <a href="/men">
          <img src={cardm} className="img-fluid" alt="Responsive img"></img>
        </a>
      </div>
      <div>
        <a href="/women">
          <img src={cardf} className="img-fluid" alt="Responsive img"></img>
        </a>
      </div>

      <div className="wrapper">
        <div className="frame-container">
          <iframe className="embed-responsive-iframe"
            src="https://www.youtube.com/embed/LIutQwhiP3M?playlist=LIutQwhiP3M&autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&autohide=1&showinfo=0 allowfullscreen"
          > 
          </iframe>
        </div>
      </div>

     
      </div>  
      <div><Footer/></div>   
    </div>
  );
};

export default Home;
