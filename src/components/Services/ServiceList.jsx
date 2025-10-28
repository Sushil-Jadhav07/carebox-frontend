import React from "react";
import { Link } from "react-router-dom";

import servicesData from "@/jsonData/servicesData.json";

const ServiceList = () => {
  return (
    <div className="cs-single-widget-wrap cs-widget-item">
      <div className="cs-widget-in">
        <div className="cs-widget-item">
          <div className="cs-single-link">
            <div className="cs-widget-title">
              <h6>Our Services List</h6>
            </div>
            <div className="cs-link-list">
              <ul>
                {servicesData.map((service, index) => (
                  <li key={index} className="cs-text_b_line">
                    <Link to={`/service-details/${service.id}`}>
                      <i className="flaticon-right-arrow"></i>
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
