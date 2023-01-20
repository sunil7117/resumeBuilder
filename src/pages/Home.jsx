import React from "react";
import BlogList from "../components/BlogList";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Showcase from "../components/Showcase";
import { blog } from "../data";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Category page="home" />
      <Carousel />

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
          <Product />
        </div>
      </div>

      <Showcase />
      <div className="blogs">
        <h1>From The Blog</h1>
        <div className="blogWrapper">
          {blog.map((items) => {
            return <BlogList items={items} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
