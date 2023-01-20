import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Hero from "../components/Hero";
import "./cart.css";
const Cart = () => {
  return (
    <div>
      <Header />
      <Category />
      <Hero />
      <div className="cartWrapper">
        <div className="cartHeading">Product</div>
        <div className="cartHeading">Price</div>
        <div className="cartHeading">Price</div>
        <div className="cartHeading">Quantity</div>
        <div className="cartHeading">Total</div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
