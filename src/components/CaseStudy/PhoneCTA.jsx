import React from "react";
import { Link } from "react-router-dom";

const PhoneCTA = ({ image, phoneNumber }) => {
  return (
    <div className="cs-phone-cta case">
      <div className="img-area">
        <img src={image} alt="LogiHub" />
      </div>
      <Link to="#" className="cs-phone-content cs-primary-btn">
        <div className="cs-phone-in">
          <div className="cs-header-phone-icon">
            <i className="flaticon-viber"></i>
          </div>
          <div className="cs-header-phone-number">
            <span>Make a Call</span>
            <div>
              <h6 className="cs-text-style-h6 cs-text_b_line">{phoneNumber}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PhoneCTA;
