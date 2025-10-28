import React, { useState } from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: "flaticon-facebook-app-symbol", path: "#" },
  { icon: "flaticon-linkedin-big-logo", path: "#" },
  { icon: "flaticon-twitter", path: "#" },
  { icon: "flaticon-instagram", path: "#" },
];

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Email submitted:", email);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  return (
    <>
      <p>Delivering Excellence in Global Logistics.</p>
      <form className="cs-logi-newsletter" onSubmit={handleSubmit}>
        <input
          className="cs-newsletter-email"
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="cs-newsletter-btn cs_center svg-left-to-right-animation-wrap"
          type="submit"
        >
          Subscribe
          <span className="svg-left-to-right-animation">
            <i className="flaticon-right-arrow"></i>
            <i className="flaticon-right-arrow"></i>
          </span>
        </button>
      </form>
      <div className="cs-social-common">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>
                <i className={link.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Newsletter;
