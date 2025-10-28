import React from "react";
import { Link } from "react-router-dom";

const HeaderEmailPhone = () => {
  return (
    <div className="cs-header-emai-phone">
      <div className="cs-topbar-email">
        <div className="cs-email">
          <Link to="mailto:Info@email.com">Info@email.com</Link>
        </div>
      </div>
      <Link to="#" className="cs-header-phone">
        <div className="cs-header-phone-content">
          <div className="cs-header-phone-in">
            <div className="cs-header-phone-icon">
              <i className="flaticon-viber"></i>
            </div>
            <div className="cs-header-phone-number">
              <span>Make a Call</span>
              <div>
                <h6 className="cs-text-style-h6 cs-text_b_line">
                  +1-416-8241228
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default HeaderEmailPhone;
