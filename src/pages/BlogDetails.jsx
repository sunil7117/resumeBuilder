import React from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const BlogDetails = ({ activePage }) => {
  alert(activePage);
  return (
    <div>
      <Header />
      <Category />
      <Hero />
      <Footer />
    </div>
  );
};

export default BlogDetails;
