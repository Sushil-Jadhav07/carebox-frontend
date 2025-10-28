import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = ({ address, phone, email }) => {
  return (
    <div className="cs-logi-cor-office">
      <p className="cs-max-width-200">{address}</p>
      <div className="cs-logi-emai-phone">
        <Link to="#" className="cs-text-style-h6">
          {phone}
        </Link>
        <Link to="#" className="cs-text-style-h6">
          {email}
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
