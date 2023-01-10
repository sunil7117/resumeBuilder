import React from "react";
import "./product.css";
import { ImHeart } from "react-icons/im";
import { FaRetweet, FaShoppingCart } from "react-icons/fa";
const Product = () => {
  return (
    <div className="products">
      <h1>Featured Product</h1>
      <div className="productWrapper">
        <ul className="productMenu">
          <li className="productMenuList actives">All</li>
          <li className="productMenuList">Oranges</li>
          <li className="productMenuList">Fresh Meat</li>
          <li className="productMenuList">Vegetable</li>
          <li className="productMenuList">FastFood</li>
        </ul>
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
      </div>
    </div>
  );
};

export default Product;
