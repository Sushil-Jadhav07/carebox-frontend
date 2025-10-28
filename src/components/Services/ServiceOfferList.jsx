import React from "react";
import classNames from "classnames";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import ServiceOfferItem from "./ServiceOfferItem";

const services = [
  {
    id: 1,
    iconClass: "flaticon-up-right-arrow",
    title: "Prime Track",
    description:
      "Say no more to the shipment delays with our guaranteed next/two-day delivery across India for urgent shipments.",
    imageSrc: "/assets/img/air-freight/service1.webp",
  },
  {
    id: 2,
    iconClass: "flaticon-up-right-arrow",
    title: "Express Standard",
    description:
      "Fulfil all your immediate logistics needs with our express deliveries via air, rail, and road freight at economical rates.",
    imageSrc: "/assets/img/air-freight/service2.webp",
  },
  {
    id: 3,
    iconClass: "flaticon-up-right-arrow",
    title: "Road Express Cargo",
    description:
      "Get affordable delivery solutions to ship heavy B2B consignments with special material handling and professional pickup services.",
    imageSrc: "/assets/img/air-freight/service3.webp",
  },
  {
    id: 4,
    iconClass: "flaticon-up-right-arrow",
    title: "Cash on Delivery/DOD",
    description:
      "We bring you the ease of getting swift COD payments from the consignee/receiver to ensure uninterrupted cash flow. Exclusively applicable to corporate/credit customers, this service can be clubbed with our ToPay offering.",
    imageSrc: "/assets/img/air-freight/service4.webp",
  },
];

const ServiceOfferList = ({ style }) => {
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
                {services.map((service) => (
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

export default ServiceOfferList;
