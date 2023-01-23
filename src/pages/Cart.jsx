import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Hero from "../components/Hero";
import "./cart.css";
import { GrClose } from "react-icons/gr";
import { cart } from "../data";
const Cart = () => {
  return (
    <div>
      <Header />
      <Category />
      <Hero />
      <div className="cartWrapper">
        <div className="cartHeadWrapper">
          <div className="cartHeading">Product</div>
          <div className="cartHeading">Price</div>
          <div className="cartHeading">Quantity</div>
          <div className="cartHeading">Total</div>
        </div>
        <hr />
        {cart.map((item) => {
          return (
            <>
              <div className="cartDetailWrapper">
                <div className="cartDetails f">
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
                <div className="cartDetails f">
                  <div className="prices">$ {item.priceper}</div>
                </div>
                <div className="cartDetails f">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
                <div className="cartDetails f jcsb">
                  <div className="prices">$ {item.total}</div>
                  <GrClose />
                </div>
              </div>
              <hr />
            </>
          );
        })}
        <div className="cartButtonWrapper">
          <button className="btnship">continue shopping</button>
          <button className="btnship">update cart</button>
        </div>
        <div className="cartDiscount gap">
          <div>
            <h1>Discount Codes</h1>
            <div className="cartDiscount gaps">
              <input type="text" placeholder="Enter Your coupan code" />
              <button className="discountbtn"> apply coupon</button>
              <div></div>
            </div>
          </div>
          <div>
            <div className="cartTotal">
              <h1>Cart Total</h1>
              <div className="total">
                <div className="totalT">SubTotal</div>
                <div className="totalT pricee">$454.98</div>
              </div>
              <div className="total">
                <div className="totalT">Total</div>
                <div className="totalT pricee">$454.98</div>
              </div>
              <div className="totalBtn">
                <button>Process to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
