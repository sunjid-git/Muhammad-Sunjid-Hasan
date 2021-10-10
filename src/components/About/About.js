import React from "react";
import "./About.css";

import { Link } from "react-router-dom";
import sunjid from "../assests/images/sunjid.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={sunjid} alt="Muhammad Sunjid Hasan Mafi" />
      </div>
      <div className="about-text">
        <h2 className="font-t">About Me</h2>
        <p className="font-r text-title">Engineer & web developer</p>

        <p>
          Hello, My name is <strong>Sunjid Hasan</strong>. I am a front-end web developer with a Bachelor's in Computer Science. As a keen individual, I have been developing my skills and enriched my profile. I count myself as a continuous learner and committed to developing myself.
        </p>
        <p>
          If you like my works, Let me know - i am open to to communicate. May
          be a simple chat clarify all the question which are buzzing in your
          head...
        </p>

        <Link
          to={{
            pathname:
              "https://drive.google.com/u/0/uc?id=1qiRPUCdlLNBYOn4VJIU563RO64uawqY-&export=download",
          }}
          target="_blank"
          className="common-btn resume-btn"
        ><i className="fas fa-cloud-download-alt fa-lg"></i>
           Resume
        </Link>

        {/* <Link
          to="/education"
          className="common-btn talk-btn"
        > <i class="fas fa-user-graduate fa-lg"></i>
           Education
        </Link> */}

       
      </div>
    </div>
  );
};

export default About;
