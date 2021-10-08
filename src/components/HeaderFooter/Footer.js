import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <p className="font-r">
          &copy; 2021 <strong className="text-color">Sunjid Hasan</strong>. All
          rights reserved.
        </p>
        <div>
          <Link
            to={{ pathname: "https://www.facebook.com/sunjid.info/" }}
            target="_blank"
          >
            <i class="fab fa-facebook fa-3x"></i>
          </Link>
          <Link
            to={{ pathname: "https://github.com/sunjid-git" }}
            target="_blank"
          >
            <i class="fab fa-github fa-3x"></i>
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/sunjid-in/" }}
            target="_blank"
          >
            <i class="fab fa-linkedin fa-3x"></i>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
