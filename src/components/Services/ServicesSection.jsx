import React from "react";
import ServiceItem from "./ServiceItem";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import servicesData from "@/jsonData/servicesData.json";

const ServicesSection = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-service-sec-wrapper cs-ser-style-2">
        <div className="container">
          <div className="row">
            <SectionTitle
              captext={"Our Services"}
              title={"What We Offer"}
              style="style3"
            />
            <div className="cs-sec-title-height"></div>
            <div className="cs-service-list-wrap">
              {servicesData?.map((service, index) => (
                <div key={service.id}>
                  <ServiceItem service={service} />
                  {index < servicesData?.length - 1 && (
                    <div className="cs-ser-border mb-50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
