import React from "react";
import { Link } from "react-router-dom";

const CoupleButtons = () => {
  return (
    <div className="cs-couple-btn-wrap">
      <Link to="#" className="cs-text_b_line arrow-rotate-left">
        <i className="flaticon-right-arrow"></i>
        <span>Previous</span>
      </Link>
      <Link to="#" className="cs-text_b_line">
        <span>Next</span>
        <i className="flaticon-right-arrow"></i>
      </Link>
    </div>
  );
};

export default CoupleButtons;
