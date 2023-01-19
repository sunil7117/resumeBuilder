import React from "react";
import BlogList from "../components/BlogList";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { blogPage } from "../data";
import "./blog.css";
const Blog = ({ activePage }) => {
  return (
    <div>
      <Header />
      <Category />
      <Hero active={activePage} />
      <div className="blogPageWrapper">
        <div className="blogPageLeft">
          <div className="searchInput">
            <input type="text" />
          </div>
          <div className="cate">
            <h1>Categories</h1>
            <div>All</div>
            <div>Beauty (20)</div>
            <div>Food (5)</div>
            <div>Life Style (9)</div>
            <div>Travel (10)</div>
          </div>
          <div className="news">
            <h1>Recent News</h1>
            {/* recent */}
            <div className="recent">
              <div className="recentLeft">
                <img src="/assets/img/blog/blog-5.jpg" alt="" />
              </div>
              <div className="recentRight">
                <div className="recentHeading">
                  <h3>Tips You To Balance Nutrition Meal Day</h3>
                </div>
                <div className="recentDate">Mar 05,2019</div>
              </div>
            </div>
            <div className="recent">
              <div className="recentLeft">
                <img src="/assets/img/blog/blog-5.jpg" alt="" />
              </div>
              <div className="recentRight">
                <div className="recentHeading">
                  <h3>Tips You To Balance Nutrition Meal Day</h3>
                </div>
                <div className="recentDate">Mar 05,2019</div>
              </div>
            </div>
            <div className="recent">
              <div className="recentLeft">
                <img src="/assets/img/blog/blog-5.jpg" alt="" />
              </div>
              <div className="recentRight">
                <div className="recentHeading">
                  <h3>Tips You To Balance Nutrition Meal Day</h3>
                </div>
                <div className="recentDate">Mar 05,2019</div>
              </div>
            </div>
            {/* recent */}
          </div>
          <div className="news">
            <h1>Search By</h1>
            <div className="searchButtons">
              <button>Apple</button>
              <button>Beauty</button>
              <button>Vegetables</button>
              <button>Fruits</button>
              <button>Healty Food</button>
              <button>Lifestyle</button>
            </div>
          </div>
        </div>
        <div className="blogPageRight">
          {blogPage.map((item) => {
            return <BlogList key={item.id} items={item} page="blog" />;
          })}
          <hr className="hr" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
