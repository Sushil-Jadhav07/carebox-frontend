import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  return (
    <div className="cs-service-item">
      <div className="ser-icon-title">
        <div className="cs-ser-icons">
          <i className={service.icon}></i>
          <svg
            width="59"
            height="70"
            viewBox="0 0 59 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.929443 69.8221L58.5489 34.9999L0.929443 0.177734V69.8221Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M0.929443 34.9999H58.5489L0.929443 0.177734V34.9999Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="cs-ser-title">
          <h4>{service.title}</h4>
        </div>
      </div>
      <div className="cs-ser-para">
        <p>{service.description}</p>
      </div>
      <div className="cs-ser-btn">
        <Link to={`/service-details/${service.id}`}>
          <i className="flaticon-arrow"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
