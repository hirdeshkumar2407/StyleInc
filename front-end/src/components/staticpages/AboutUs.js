import React from "react";
import { Row, Container } from "react-bootstrap";
import NavMN from "../partials/NavbarMenWomen";
import Header from "../partials/Header"
import Footer from "../partials/Footer"
const AboutUs = () => {
  return (
    <div>
 <div><Header/></div>
 <div><NavMN/></div>
 <div className={"Spacer"} />
      <div>
        <Container>
          <Row className={"AboutUsHeading justify-content-md-center"}>
            <h1 className={"AboutUsHeading"}>ABOUT US</h1>
          </Row>
          <div className={"HSpacer"} />
          <Row className={"AboutUsPara justify-content-md-center"}>
            <p>
              Established in 2003, STYLE INC is a fashion brand created for the
              spirited youth of Pakistan who enjoy indulging in the latest
              lifestyle trends; be it style, music, technology or social
              networking, as a means to express themselves.
            </p>
          </Row>
          <Row className={"AboutUsPara justify-content-md-center"}>
            <p>
              STYLE INC has separate product lines in order to cater to all
              segments and their demands - men, women and juniors. Within each
              line we offer a wide array of products which caters to a variety
              of different styles and preferences, from highly fashionable, on
              trend pieces to athleisure garments to more casual, every day
              attire and basic apparel.
            </p>
          </Row>
          <Row className={"AboutUsPara justify-content-md-center"}>
            <p>
              STYLE INC's product range also includes a wide array of footwear,
              accessories and fragrances, making it a one-stop high-street
              destination for all western wear wardrobe demands.
            </p>
          </Row>
          <Row className={"AboutUsPara justify-content-md-center"}>
            <p>
              STYLE INC has always been able to provide the best in fashion
              through a unique and flexible model that is open to adapting to
              the constant changes that occur during a season. At the same time,
              we are able to respond to key trends and develop them into
              wearable fashion in the shortest possible time for a collection
              that is fun, vibrant, and expressive.
            </p>
          </Row>
          <Row className={"AboutUsPara justify-content-md-center"}>
            <p>
              Today, after 17 years of meeting the public’s demand for on trend
              western wear in Pakistan, STYLE INC has managed to successfully
              set up 120+ stores across 20 cities in Pakistan as well as, a
              rapidly growing online store, all of which have been carefully
              merchandised to cater to our customers, allowing them to build a
              wardrobe that expresses them and their personal style.
            </p>
          </Row>
        </Container>
      </div>
      <div className={"Spacer"} />
      <div><Footer/></div>
    </div>
  );
};

export default AboutUs;
