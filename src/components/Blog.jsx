import React from "react";
import "./blog.css";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="blogs">
      <h1>From The Blog</h1>
      <div className="blogWrapper">
        <div className="blog">
          <img src="/assets/img/blog/blog-1.jpg" alt="" />
          <div className="dates">
            <div className="date">
              <BsCalendar2Date /> May 4,2019
            </div>
            <div className="comment">
              <FaRegComment /> 5
            </div>
          </div>
          <h2 className="blogHeading">Cooking tips make cooking simple</h2>
          <div className="blogText">
            Sed quia non numquam modi tempora indunt ut labore et dolore magnam
            aliquam quaerat
          </div>
        </div>
        <div className="blog">
          <img src="/assets/img/blog/blog-1.jpg" alt="" />
          <div className="dates">
            <div className="date">
              <BsCalendar2Date /> May 4,2019
            </div>
            <div className="comment">
              <FaRegComment /> 5
            </div>
          </div>
          <h2 className="blogHeading">Cooking tips make cooking simple</h2>
          <div className="blogText">
            Sed quia non numquam modi tempora indunt ut labore et dolore magnam
            aliquam quaerat
          </div>
        </div>
        <div className="blog">
          <img src="/assets/img/blog/blog-1.jpg" alt="" />
          <div className="dates">
            <div className="date">
              <BsCalendar2Date /> May 4,2019
            </div>
            <div className="comment">
              <FaRegComment /> 5
            </div>
          </div>
          <h2 className="blogHeading">Cooking tips make cooking simple</h2>
          <div className="blogText">
            Sed quia non numquam modi tempora indunt ut labore et dolore magnam
            aliquam quaerat
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
