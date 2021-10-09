import React from "react";
import "./HomePage.css";
import homePic from "../assests/images/home-Page.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text-container">
        <p className="font-a">Hello,</p>
        <p className="font-t">I'M SUNJID</p>
        <p className="text-typing-effect font-t">Engineer | Web Developer</p>
        <div className="btn-div">
        <Link to="/contact" className="common-btn talk-btn">Let's Talk</Link>
        <Link
          to={{
            pathname:
              "https://drive.google.com/file/d/1qiRPUCdlLNBYOn4VJIU563RO64uawqY-/view",
          }}
          target="_blank"
          className="common-btn resume-btn"
        >
          Resume
        </Link>
        </div>
      </div>

      <div className="home-pic">
        <img alt="homePic" src={homePic} />
      </div>
    </div>
  );
};

export default HomePage;
