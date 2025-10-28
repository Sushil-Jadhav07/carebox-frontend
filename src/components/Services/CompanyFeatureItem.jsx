import React from "react";

const CompanyFeatureItem = ({ title, description }) => {
  return (
    <div className="cs-com-feature-content">
      <div className="cs-com-fe-item">
        <div className="cs-feature-title">
          <h5>{title}</h5>
        </div>
        <div className="cs-com-fe-icon">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.870972 18.2441L18.6072 9.24414L0.870972 0.244141V18.2441Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M0.870972 9.24414H18.6072L0.870972 0.244141V9.24414Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="cs-com-fe-text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFeatureItem;
