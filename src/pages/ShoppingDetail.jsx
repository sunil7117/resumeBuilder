import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { BsHeart } from "react-icons/bs";
import "./shoppingDetail.css";
const ShoppingDetail = () => {
  const [count, setCount] = useState(2);
  const handleCount = (btn) => {
    if (btn === "plus") {
      setCount(count + 1);
    } else {
      setCount(count >= 1 ? count - 1 : 0);
    }
  };
  return (
    <div>
      <Header />
      <Category />
      <Hero />
      <div className="shoppingWrapper">
        <div className="shoppingTop">
          <div className="shoppingTopLeft">
            <img
              src="/assets/img/product/details/product-details-1.jpg"
              alt=""
            />
          </div>
          <div className="shoppingTopRight">
            <h1 className="heading">Vetgetable’s Package</h1>
            <p className="rating">s</p>
            <p className="prices">$ 50.00</p>
            <p className="details">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Proin eget tortor risus.
            </p>
            <div className="cartSettings">
              <div className="count">
                <button
                  onClick={() => {
                    handleCount("minus");
                  }}
                >
                  -
                </button>
                <span className="countValue">{count}</span>
                <button
                  onClick={() => {
                    handleCount("plus");
                  }}
                >
                  +
                </button>
              </div>
              <div className="carts">
                <button>Add to Card</button>
              </div>
              <div className="like">
                <button>
                  <BsHeart />
                </button>
              </div>
            </div>
            <hr />
            <div className="stock">
              <div className="sheading">Availability</div>
              <div className="sdesc">in stock</div>
              <div className="sheading">Shipping</div>
              <div className="sdesc">
                01 day shipping.
                <span className="sdescAdd">Free pickup today </span>
              </div>
              <div className="sheading">Weight</div>
              <div className="sdesc">0.5 kg</div>
              <div className="sheading">Share On</div>
              <div className="sdesc"></div>
            </div>
          </div>
          <div className="shoppingTopLeft">Slider</div>
          <div className="shoppingTopRight"></div>
        </div>
        <div className="shoppingBottom">
          <div className="productInfo">{/* write here code....... */}</div>
        </div>
      </div>
      <div className="products">
        <h1>Related Product</h1>
        <div className="productWrapper">
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingDetail;
