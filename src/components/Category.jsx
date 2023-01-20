import React from "react";
import "./category.css";
import { ImHeart } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { GrDown } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ page }) => {
  const [hide, setHide] = useState(page === "home" ? true : false);
  const handleMenuShow = () => {
    setHide(!hide);
  };
  return (
    <div className="category">
      <div className="categoryTop">
        <div className="categoryTopLeft">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <ul className="categoryTopCenter">
          <Link to="/" className="routerLinks">
            <li className="menuItem">Home</li>
          </Link>
          <li className="menuItem">Shop</li>
          <li className="menuItem">
            Pages
            <ul className="categoryTopSubmenus ">
              <Link to="/shoppingdetail">
                <li className="categoryTopSubmenu">shop details</li>
              </Link>
              <Link to="/cart">
                <li className="categoryTopSubmenu">shopping cart</li>
              </Link>

              <li className="categoryTopSubmenu">check out</li>
              <li className="categoryTopSubmenu">blog details</li>
            </ul>
          </li>
          <Link to="/blog" className="routerLinks">
            <li className="menuItem">Blog</li>
          </Link>
          <Link to="/contact" className="routerLinks">
            <li className="menuItem">Contact</li>
          </Link>
        </ul>
        <div className="categoryTopRight">
          <div className="categoryTopRightIcons">
            <ImHeart className="categoryTopRightIcon" />
            <div className="nodification">
              <div className="nodificationText">
                <p>1</p>
              </div>
            </div>
          </div>
          <div className="categoryTopRightIcons">
            <FaShoppingBag className="categoryTopRightIcon" />
            <div className="nodification">
              <div className="nodificationText">
                <p>3</p>
              </div>
            </div>
          </div>
          <div className="textItems">
            Item : <span>$150.00</span>
          </div>
        </div>
      </div>
      <div className="categoryCenter">
        <div className="categoryCenterLeft">
          <div className="dropdown" onClick={handleMenuShow}>
            <GoThreeBars />
            <span>All departments</span>
            <GrDown />
          </div>
          <ul className={hide ? "dropdownMenu" : "hide"}>
            <li className="dropdownMenuList">Fresh meat</li>
            <li className="dropdownMenuList">vegetables</li>
            <li className="dropdownMenuList">Fresh meat</li>
            <li className="dropdownMenuList">vegetables</li>
            <li className="dropdownMenuList">Fresh meat</li>
            <li className="dropdownMenuList">vegetables</li>
            <li className="dropdownMenuList">Fresh meat</li>
            <li className="dropdownMenuList">vegetables</li>
            <li className="dropdownMenuList">Fresh meat</li>
            <li className="dropdownMenuList">vegetables</li>
            <li className="dropdownMenuList">Fresh meat</li>
          </ul>
        </div>
        <div className="categoryCenterRight">
          <div className="categoryCenterRightOne">
            <div className="categoryCenterRightOnes">
              <select name="" id="" className="select">
                <option value="" selected>
                  all categories
                </option>
              </select>
              <input
                className="input"
                type="text"
                placeholder="What do  you need?"
              />
              <button className="button">Search</button>
            </div>
          </div>
          <div className="categoryCenterRightTwo">
            <div className="calls">
              <IoIosCall />
            </div>
            <div className="num">
              <span>+65 11.188.888</span> <br />
              support 24/7 time
            </div>
          </div>
        </div>
      </div>
      {page === "home" && (
        <div className="categoryBottom">
          <div className="categoryBottomLeft"></div>
          <div className="categoryBottomRight">
            <img src="/assets/img/hero/banner.jpg" alt="" />
            <div className="categoryBottomRightText">
              <p className="fruit">fruit fresh</p>
              <h1>
                vegetable <br />
                100% Organic
              </h1>
              <p className="free">Free pickup and delivery availble</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
