import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:sg5609@srmist.edu.in">
          sg5609@srmist.edu.in
        </a>

        <i class="fa fa-linkedin"></i>
        <a
          class="mail-links"
          href="https://www.linkedin.com/in/sai-karthik-goud-ginikunta-a82723250/"
        >
          User Name: Sai Karthik Goud Ginikunta
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/sk1908">
          sk1908
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/karthik_.1908/">
          @karthik_.1908
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919704644850">
          +91 9704644850
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;
