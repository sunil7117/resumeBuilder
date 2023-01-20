import React from "react";
import "./product.css";
import { ImHeart } from "react-icons/im";
import { FaRetweet, FaShoppingCart } from "react-icons/fa";
const Product = () => {
  return (
    <div className="productBoxes">
      <div className="productBox">
        <div className="productImg">
          <img src="/assets/img/featured/feature-1.jpg" alt="" />
          <div className="productNodification">
            <div className="circle">
              <ImHeart className="productIcon" />
            </div>
            <div className="circle">
              <FaRetweet className="productIcon" />
            </div>
            <div className="circle">
              <FaShoppingCart className="productIcon" />
            </div>
          </div>
        </div>
        <div className="productText">
          <p className="title">Crab Pool Security</p>
          <p className="price">$30.00</p>
        </div>
      </div>
      <div className="productBox">
        <div className="productImg">
          <img src="/assets/img/featured/feature-2.jpg" alt="" />
          <div className="productNodification">
            <div className="circle">
              <ImHeart className="productIcon" />
            </div>
            <div className="circle">
              <FaRetweet className="productIcon" />
            </div>
            <div className="circle">
              <FaShoppingCart className="productIcon" />
            </div>
          </div>
        </div>
        <div className="productText">
          <p className="title">Crab Pool Security</p>
          <p className="price">$30.00</p>
        </div>
      </div>
      <div className="productBox">
        <div className="productImg">
          <img src="/assets/img/featured/feature-3.jpg" alt="" />
          <div className="productNodification">
            <div className="circle">
              <ImHeart className="productIcon" />
            </div>
            <div className="circle">
              <FaRetweet className="productIcon" />
            </div>
            <div className="circle">
              <FaShoppingCart className="productIcon" />
            </div>
          </div>
        </div>
        <div className="productText">
          <p className="title">Crab Pool Security</p>
          <p className="price">$30.00</p>
        </div>
      </div>
      <div className="productBox">
        <div className="productImg">
          <img src="/assets/img/featured/feature-4.jpg" alt="" />
          <div className="productNodification">
            <div className="circle">
              <ImHeart className="productIcon" />
            </div>
            <div className="circle">
              <FaRetweet className="productIcon" />
            </div>
            <div className="circle">
              <FaShoppingCart className="productIcon" />
            </div>
          </div>
        </div>
        <div className="productText">
          <p className="title">Crab Pool Security</p>
          <p className="price">$30.00</p>
        </div>
      </div>
      <div className="productBox">
        <div className="productImg">
          <img src="/assets/img/featured/feature-5.jpg" alt="" />
          <div className="productNodification">
            <div className="circle">
              <ImHeart className="productIcon" />
            </div>
            <div className="circle">
              <FaRetweet className="productIcon" />
            </div>
            <div className="circle">
              <FaShoppingCart className="productIcon" />
            </div>
          </div>
        </div>
        <div className="productText">
          <p className="title">Crab Pool Security</p>
          <p className="price">$30.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
