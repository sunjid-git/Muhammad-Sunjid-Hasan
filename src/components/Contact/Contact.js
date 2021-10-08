import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <h4 className="font-t">Interested? Let's Get to know each other!</h4>
      <p></p>
      <Link to="/contactPage" className="contact-me-btn font-b">
        Contact me
      </Link>
    </div>
  );
};

export default Contact;
