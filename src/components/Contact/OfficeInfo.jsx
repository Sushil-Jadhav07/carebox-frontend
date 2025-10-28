import React from "react";
import { Link } from "react-router-dom";

const OfficeInfo = ({ title, address, phone, email }) => {
  return (
    <div className="cs-logi-cor-office cs-default-office">
      <div className="cs-footer-widget-title">
        <h6>{title}</h6>
      </div>
      <p className="cs-max-width-200 cs-color-body">{address}</p>
      <div className="cs-logi-emai-phone">
        <Link to={`telto:${phone}`} className="cs-text-style-h6">
          {phone}
        </Link>
        <Link to={`mailto:${email}`} className="cs-text-style-h6">
          {email}
        </Link>
      </div>
    </div>
  );
};

export default OfficeInfo;
