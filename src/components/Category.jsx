import React from "react";
import "./category.css";
import { ImHeart } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { GrDown } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

const Category = () => {
  const [hide, setHide] = useState(false);
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
          <li className="menuItem active">Home</li>
          <li className="menuItem">Shop</li>
          <li className="menuItem">
            Pages
            <ul className="categoryTopSubmenus ">
              <li className="categoryTopSubmenu">shop details</li>
              <li className="categoryTopSubmenu">shopping cart</li>
              <li className="categoryTopSubmenu">check out</li>
              <li className="categoryTopSubmenu">blog details</li>
            </ul>
          </li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">Contact</li>
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
      <div className="categoryBottom">
        <div className="categoryBottomLeft">
          <div className="dropDownMenuTop">
            <div className="dropdownMenus">
              <div className="dropDownMenu" onClick={handleMenuShow}>
                <GoThreeBars className="bars" />
                <span> All departments</span>
                <GrDown className="down" />
              </div>
              <ul className={hide === true ? "dropHide" : "dropDownMenuset"}>
                <li className="dropDownMenuList">Fresh meat</li>
                <li className="dropDownMenuList">vegetables</li>
                <li className="dropDownMenuList">fruit & nut gifts</li>
                <li className="dropDownMenuList">fresh berries</li>
                <li className="dropDownMenuList">ocean foods</li>
                <li className="dropDownMenuList">butter & eggs</li>
                <li className="dropDownMenuList">fastfood</li>
                <li className="dropDownMenuList">fresh onion</li>
                <li className="dropDownMenuList">papaya & cripss</li>
                <li className="dropDownMenuList">oatmeal</li>
                <li className="dropDownMenuList">fresh bananas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="categoryBottomRight">
          <div className="categoryBottomRightTop">
            <div className="categoryBottomRightLeft">
              <div className="search">
                <select>
                  <option value="">All categories</option>
                  <option value="">two</option>
                </select>
                <input type="text" placeholder="What do you need?" />
                <button>Search</button>
              </div>
            </div>
            <div className="categoryBottomRightRight">
              <div className="callIcon">
                <IoIosCall className="calls" />
              </div>
              <div className="support">
                <div className="call">+65 11.188.888</div>
                <div className="text">support 24/7 time</div>
              </div>
            </div>
          </div>
          <div className="categoryBottomRightBottom">
            <img src="/assets/img/hero/banner.jpg" alt="" />
            <div className="heroText">
              <p className="text1">FRUIT FRESH</p>
              <h2 className="textHeading">
                Vegetable <br></br>100% Organic
              </h2>
              <p className="text2">Free Pickup and Delivery Available</p>
              <button className="shop">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
