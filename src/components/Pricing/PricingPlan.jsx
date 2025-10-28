import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const PricingPlan = ({ title, price, features, subtitle, index: stylebtn }) => {
  const btncolor = classNames("cs-primary-btn", {
    "gray-primary-btn": stylebtn !== 1,
  });
  return (
    <div className="cs-pricing-item-wrap">
      <div className="cs-pricing-content">
        <div className="cs-pricing-top">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
        <div className="cs-price-text">
          <h3>{price}</h3>
          <span>/month</span>
        </div>
        <div className="cs-pricing-feature-list">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={btncolor}>
          <Link to="#">
            Get Started Now <i className="flaticon-right-arrow"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
