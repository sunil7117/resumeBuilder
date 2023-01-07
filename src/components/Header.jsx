import { Message, Person } from "@mui/icons-material";
import React from "react";
import "./header.css";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="headerLeft">
          <div className="headerEmail">
            <Message /> <span>hello@colorlib.com</span>
          </div>
          <hr className="vertical" />
          <div className="headerFreeshipping">
            Free Shipping for all Order of $99
          </div>
        </div>
        <div className="headerRight">
          <div className="headerSocialLinks">
            <div className="headerSocialLink">
              <ImFacebook />
            </div>
            <div className="headerSocialLink">
              <ImTwitter />
            </div>
            <div className="headerSocialLink">
              <ImLinkedin2 />
            </div>
          </div>
          <hr className="vertical" />
          <div className="headerLanguage">
            <div>
              <img src="/assets/img/language.png" /> English
              <RiArrowDropDownLine />
              <div className="language">
                <div className="lan">spanish</div>
                <div className="lan">emglish</div>
              </div>
            </div>
          </div>
          <hr className="vertical" />
          <div className="headerLogin">
            <Person /> Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
