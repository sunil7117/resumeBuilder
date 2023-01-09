import React from "react";
import { ImHeart, ImInstagram, ImTwitch } from "react-icons/im";
import "./footer.css";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerwrapper">
        <div className="footerTop">
          <div className="footerTopleft">
            <img className="logo" src="/assets/img/logo.png" alt="" />
            <address>
              Address: 60-49 Road 11378 New York
              <br /> Phone: +65 11.188.888 <br />
              Email:hello@colorlib.com
            </address>
          </div>
          <div className="footerTopMiddle">
            <h4>Useful Links</h4>
            <div className="usefulLinks">
              <div className="usefulLink">
                <div>About us</div>
                <div>About Our Shop</div>
                <div>Secure Shopping</div>
                <div>Delivery information</div>
                <div>Privacy policy</div>
                <div>Our Sitemap</div>
              </div>
              <div className="usefulLink">
                <div>Who we are</div>
                <div>Our Services</div>
                <div>Projects</div>
                <div>Contact</div>
                <div>Innovation</div>
                <div>Testimonials</div>
              </div>
            </div>
          </div>
          <div className="footerTopRight">
            <h4>Join Our Newlatter Now</h4>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className="subscribe">
              <input type="text" placeholder="Enter your mail" />
              <button>SUBSCRIBED</button>
            </div>
            <div className="footerSocailLinks">
              <div className="circle">
                <ImFacebook className="icons" />
              </div>
              <div className="circle">
                <ImInstagram className="icons" />
              </div>
              <div className="circle">
                <ImTwitter className="icons" />
              </div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <hr className="horizontal"></hr>
        <div className="footerBottom">
          <div className="footerBottomleft">
            <div>
              Copyright ©2023 All rights reserved | This template is made with
              <ImHeart />
              by
              <span> Colorlib</span>.
            </div>
          </div>
          <div className="footerBottomRight">
            <img src="/assets/img/payment-item.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
