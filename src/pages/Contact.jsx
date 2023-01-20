import React from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaRegComment } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Hero from "../components/Hero";
import "./contact.css";
import { BsClock, BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
const Contact = ({ activePage }) => {
  return (
    <div className="contactWrapper">
      <Header />
      <Category />
      <Hero active={activePage} />
      <div className="contactDetails">
        <div className="cantactDetail">
          <div className="contactDetailIcon">
            <IoMdCall className="contactDetailIcons" />
          </div>
          <div className="contactDetailText">
            <div className="contactDetailHeading">
              <h2>Phone</h2>
            </div>
            <div className="contactDetailText">+01-3-8888-6868</div>
          </div>
        </div>
        <div className="cantactDetail">
          <div className="contactDetailIcon">
            <GoLocation className="contactDetailIcons" />
          </div>
          <div className="contactDetailText">
            <div className="contactDetailHeading">
              <h2>Address </h2>
            </div>
            <div className="contactDetailText">60-49 Road 11378 New York</div>
          </div>
        </div>
        <div className="cantactDetail">
          <div className="contactDetailIcon">
            <BsClock className="contactDetailIcons" />
          </div>
          <div className="contactDetailText">
            <div className="contactDetailHeading">
              <h2>Open Timing</h2>
            </div>
            <div className="contactDetailText">10:00 am to 23:00 pm</div>
          </div>
        </div>
        <div className="cantactDetail">
          <div className="contactDetailIcon">
            <BsEnvelope className="contactDetailIcons" />
          </div>
          <div className="contactDetailText">
            <div className="contactDetailHeading">
              <h2>Email</h2>
            </div>
            <div className="contactDetailText">hello@colorlib.com</div>
          </div>
        </div>
      </div>
      <div className="contactLocation">
        <div className="contactCard">
          <div className="contactCardText">one</div>
        </div>
      </div>
      <div className="contactform">
        <h1>Leave Message</h1>
        <div className="cform">
          <div className="cInput c-6">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your email" />
          </div>
          <div className="cInput c-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="cInput c-1">
            <button>Send message</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
