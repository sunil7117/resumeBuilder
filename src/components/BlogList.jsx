import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./blogList.css";
const BlogList = ({ items, page }) => {
  return (
    <div className="blog">
      <img src={items.img} alt="" />
      <div className="dates">
        <div className="date">
          <BsCalendar2Date /> {items.date}
        </div>
        <div className="comment">
          <FaRegComment /> {items.Comment}
        </div>
      </div>
      <h2 className="blogHeading">{items.title}</h2>
      <div className="blogText">{items.desc}</div>
      {page && (
        <Link to="/blog-details" className="routerLinks" title={items.title}>
          <div className="readMore">
            <div className="readText">READ MORE</div>
            <div className="arrow"></div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default BlogList;
