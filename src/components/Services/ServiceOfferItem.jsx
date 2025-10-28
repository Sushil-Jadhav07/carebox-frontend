import React from "react";
import { Link } from "react-router-dom";

const ServiceOfferItem = ({ service }) => {
  return (
    <div className="cs-serivce-item-content">
      <div className="cs-serivce-item-content-in">
        <div className="cs-ser-icon">
          <Link to={`/service-details/${service.id}`}>
            <i className={service.iconClass}></i>
          </Link>
        </div>
        <div className="cs-ser-content">
          <h4 className="cs_white_color">{service.title}</h4>
          <p>{service.description}</p>
          <Link
            to={`/service-details/${service.id}`}
            className="cs-text_b_line cs_white_color"
          >
            <span>Read More</span>
            <i className="flaticon-right-arrow"></i>
          </Link>
        </div>
      </div>
      <div className="cs-service-item-img">
        <img src={service.imageSrc} alt={"LogiHub"} />
      </div>
    </div>
  );
};

export default ServiceOfferItem;
