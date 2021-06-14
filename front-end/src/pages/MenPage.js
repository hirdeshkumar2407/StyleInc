/* eslint-disable jsx-a11y/anchor-has-content */
import "../components/staticpages/staticpages.css";
import React from "react";

const MenPage = (props) => {
  const { product } = props;
  return (
    <div class="col-sm-3">
      <div>
        <div className="flex container page-wrapper">
          <div className="page-inner">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={product.image} alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <a className="p-name" href={`productm/${product._id}`}></a>
                  </div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>
                <a className="cart" href={`productm/${product._id}`}>
                  <span className="price">PKR {product.price}</span>
                  <span className="add-to-cart">
                    <span className="txt">{product.name}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPage;