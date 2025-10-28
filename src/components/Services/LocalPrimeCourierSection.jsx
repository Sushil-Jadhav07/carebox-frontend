import React from "react";
import classNames from "classnames";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import ServiceOfferItem from "./ServiceOfferItem";

const localPrimeServices = [
  {
    id: 1,
    iconClass: "flaticon-up-right-arrow",
    title: "Same Day Delivery",
    description:
      "Get your urgent packages delivered the same day within Mumbai and surrounding areas. Perfect for time-sensitive documents and small parcels.",
    imageSrc: "/assets/img/air-freight/service1.webp",
  },
  {
    id: 2,
    iconClass: "flaticon-up-right-arrow",
    title: "Express Local",
    description:
      "Fast and reliable local courier service for same-day and next-day delivery within Mumbai city limits with real-time tracking.",
    imageSrc: "/assets/img/air-freight/service2.webp",
  },
  {
    id: 3,
    iconClass: "flaticon-up-right-arrow",
    title: "Document Courier",
    description:
      "Specialized handling of important documents, certificates, and legal papers with secure packaging and guaranteed delivery.",
    imageSrc: "/assets/img/air-freight/service3.webp",
  },
  {
    id: 4,
    iconClass: "flaticon-up-right-arrow",
    title: "Bike Courier",
    description:
      "Quick and efficient bike courier service for small packages and documents across Mumbai with same-day delivery options.",
    imageSrc: "/assets/img/air-freight/service4.webp",
  },
];

const LocalPrimeCourierSection = ({ style }) => {
  const serviceitemsfullw = classNames("cs-service-items-fullw cs_bg", {
    "cs-maxw-1720": style === "style2",
  });

  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-service-style2-wrap">
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"What We Offer"}
              captext={"Services"}
              style={"style3"}
            />
            <div className="cs-sec-title-height"></div>
          </div>
        </div>

        <DynamicBackground
          className={serviceitemsfullw}
          dataSrc="/assets/img/air-freight/banner1.png"
        >
          <div className="cs-service-items-in">
            <div className="container-fluid">
              <div className="row">
                {localPrimeServices.map((service) => (
                  <div className="col-lg-3 col-md-6" key={service.id}>
                    <ServiceOfferItem service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DynamicBackground>
      </div>
    </section>
  );
};

export default LocalPrimeCourierSection;
