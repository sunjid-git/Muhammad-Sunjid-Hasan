import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <footer>
        <p>Going-To-Internet</p>
        <p>
          Social media network is just one click away. If you think i can be
          any good for you. Let me through below medium.
        </p>

        <div className="social-links">
          <Link
            to={{ pathname: "https://www.facebook.com/sunjid.info/" }}
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </Link>
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
        </div>

        <p className="font-r">
          &copy; 2021 <strong className="text-color">Sunjid Hasan</strong>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
