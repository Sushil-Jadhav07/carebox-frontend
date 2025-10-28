import React from "react";
import PricingPlan from "./PricingPlan";

const pricingData = [
  {
    id: 1,
    title: "Basic Package",
    subtitle: "Delivery within 3-5 days",
    price: 499,
    features: [
      "Delivery within 3-5 business days",
      "Coverage of up to 50 miles",
      "Real-time tracking for all shipments",
      "Basic insurance coverage",
    ],
  },
  {
    id: 2,
    title: "Professional Package",
    subtitle: "Delivery within 3-5 days",
    price: 999,
    features: [
      "Delivery within 3-5 business days",
      "Coverage of up to 50 miles",
      "Real-time tracking for all shipments",
      "Basic insurance coverage",
    ],
  },
  {
    id: 3,
    title: "Enterprise Package",
    subtitle: "Delivery within 3-5 days",
    price: "Custom",
    features: [
      "Delivery within 3-5 business days",
      "Coverage of up to 50 miles",
      "Real-time tracking for all shipments",
      "Basic insurance coverage",
    ],
  },
];

const PricingSection = () => {
  return (
    <section>
      <div className="cs-pricing-wrap">
        <div className="cs-pricing-in">
          <div className="cs-height-120"></div>
          <div className="container">
            <div className="row">
              {pricingData.map((item, index) => (
                <div className="col-xl-4 col-lg-6" key={item.id}>
                  <PricingPlan
                    title={item.title}
                    price={item.price}
                    features={item.features}
                    subtitle={item.subtitle}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="cs-height-120"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
