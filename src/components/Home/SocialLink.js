import React from "react";
import "./SocialLink.css";

import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <div className="social-side-icon">
      <nav>
        <ul>
          <Link
            to={{ pathname: "https://github.com/sunjid-git" }}
            target="_blank"
          >
            <i className="fab fa-github "></i>
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/sunjid-in/" }}
            target="_blank"
          >
            <i className="fab fa-linkedin "></i>
          </Link>
          <Link
            to={{ pathname: "https://www.facebook.com/sunjid.info/" }}
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SocialLink;
