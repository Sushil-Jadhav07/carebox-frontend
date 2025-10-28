import React from "react";
import { Link } from "react-router-dom";

const DownloadBrochure = () => {
  return (
    <div className="cs-widget-item cs-widget-download">
      <Link to="#" className="cs-download-card-in">
        <div className="cs-download-icon">
          <i className="flaticon-cloud-download"></i>
        </div>
        <div className="cs-download-text">
          <span className="cs-small-text">Resource</span>
          <h6>Download Brochure</h6>
        </div>
      </Link>
    </div>
  );
};

export default DownloadBrochure;
