import React from "react";
import { Link } from "react-router-dom";

import logoUrl from "/assets/img/careboxlogo.png";

const CopyArea = ({ logoAlt, brandText, copyrightText, companyName }) => {
  return (
    <div className="cs-logi-copy-area">
      <div className="cs-footer-copy-branding">
        <Link to="/">
          <img src={logoUrl} alt={logoAlt} />
        </Link>
        <span>{brandText}</span>
      </div>
      <div className="cs-footer-copy-text">
        <p>
          ©2025 <Link to="#">{companyName}</Link>. {copyrightText}
        </p>
      </div>
    </div>
  );
};

export default CopyArea;
