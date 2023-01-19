import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = ({ active }) => {
  return (
    <div className="heroWrapper">
      <div className="heroTexts">
        <h1>{active}</h1>
        <p>
          <Link to="/" className="routerLinks blogLink">
            Home
          </Link>
          -- {active}
        </p>
      </div>
    </div>
  );
};

export default Hero;
