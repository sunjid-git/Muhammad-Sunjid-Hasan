import React from "react";
import "./ContactPage.css";
import contact from "../../components/assests/images/contact.svg";

import emailjs from "emailjs-com";

const ContactPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ee5rduq",
        "template_ifn2lde",
        e.target,
        "user_auDCWQqpwHwe2nHdx1rCG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-page-container">
      <h2 className="text-color">Get in touch!</h2>
      <div className="contact-page">
        <div className="contact-left">
          <img src={contact} alt="" />
        </div>

        <div className="contact-right">
          <form onSubmit={sendEmail}>
      
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="email-input a"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="email-input b"
              />
       

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="email-input c"
            />

            <textarea
              name="message"
              id=""
              cols="25"
              rows="8"
              className="email-input d"
              placeholder="Write your message..."
              required
            ></textarea>

            <input type="submit" value="Send" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
