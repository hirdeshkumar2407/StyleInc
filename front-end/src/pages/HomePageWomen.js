/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import MessageComp from "../components/MessageComp";
import LoaderComp from "../components/LoaderComp";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import "../components/staticpages/staticpages.css";
import { womenProductsList } from "../redux/actions/productActions";
import promo2 from "../components/staticpages/staticpagesimages/WomenBanner.png";
import Womenpage from "./WomenPage";
import Header from "../components/partials/Header";
import NavMN from "../components/partials/NavbarMenWomen";
import Footer from "../components/partials/Footer";
import ProductFemale from "../components/ProductF";

const HomePageWomen = () => {
  const dispatch = useDispatch();
  const productsWomenList = useSelector((state) => state.productsWomenList);
  const { loading, err, products } = productsWomenList;

  useEffect(() => {
    dispatch(womenProductsList());
  }, [dispatch]); //This function is run one after rendering tis componenet
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <NavMN />
        </div>

        <div className={"EdgeSetter"}>
          <Card>
            <Card.Img src={promo2} alt="Card image" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </div>

        {loading ? (
          <LoaderComp></LoaderComp>
        ) : err ? (
          <MessageComp>{err}</MessageComp>
        ) : (
          <div className="row center">
            {products.map((product) => (
              <Womenpage product={product} key={product._id}></Womenpage>
              // <ProductFemale product={product} key={product._id}></ProductFemale>
            ))}
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePageWomen;