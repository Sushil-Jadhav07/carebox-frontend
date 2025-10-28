import React from "react";
import { Link } from "react-router-dom";

const linksData = [
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Domestic" },
  { path: "/contact-us", label: "Contact Us" },
  // { path: "/services", label: "Services" },
  // { path: "/team", label: "Our Crew" },
  // { path: "/faq", label: "Faq Pages" },
  // { path: "/quote", label: "Free Quote" },
];

const UsefulLinks = () => {
  return (
    <div className="cs-logi-footer-useful-link">
      <ul>
        {linksData.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="cs-text_b_line">
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsefulLinks;
