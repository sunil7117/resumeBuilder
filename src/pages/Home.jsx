import React from "react";
import Blog from "../components/Blog";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Carousel />
      <Product />
      <Showcase />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
