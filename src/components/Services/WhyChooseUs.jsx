import React from "react";
import CompanyFeatureItem from "./CompanyFeatureItem.jsx";
import SectionTitle from "@/components/SectionTitle/SectionTitle.jsx";
import RevealImage from "@/components/RevealImage/RevealImage.jsx";

import airfreightdrone from "/assets/img/air-freight/featureimg.webp";

const features = [
  {
    id: 1,
    title: "Expertise from Industry Veterans",
    description:"Our founders and team bring over 25 years of combined experience in the courier industry, ensuring that every shipment is handled with the highest level of professionalism and care.",
  },
  {
    id: 2,
    title: "Fast & Reliable Service",
    description:"Whether it’s local express deliveries or domestic shipments, Carebox guarantees timely, dependable service with a strong focus on on-time delivery.",
  },
  {
    id: 3,
    title: "Safe & Secure Handling",
    description:"We understand the value of your shipments, which is why we provide safe and secure handling for every package, ensuring it reaches its destination in perfect condition.",
  },
  {
    id: 4,
    title: "Wide Coverage Across Mumbai & Beyond",
    description:"Based in Mumbai, we specialize in local express courier services but also offer extensive domestic shipping solutions, covering major cities throughout India.",
  },
  {
    id: 5,
    title: "Affordable Pricing",
    description:"We offer competitive, transparent pricing for all our courier services, making high-quality shipping accessible to businesses and individuals alike.",
  },
  {
    id: 6,
    title: "Real-Time Tracking",
    description:"Stay in control with our real-time tracking system, giving you complete visibility of your shipments from pickup to delivery.",
  },
];

const WhyChooseUs = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-com-feature-wrapper cs-com-feature-for-airfreight">
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"Why Choose Us for Your Logistics Needs?"}
              to="/services"
              style={"style2"}
            />
          </div>
        </div>

        <div className="cs-sec-title-height"></div>

        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-6 col-lg-12">
              <div className="cs-com-fe-content-in">
                {features.map((feature, index) => (
                  <React.Fragment key={feature.id}>
                    <CompanyFeatureItem
                      title={feature.title}
                      description={feature.description}
                    />
                    {index < features.length - 1 && (
                      <div className="cs-height-75"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <RevealImage
                image={airfreightdrone}
                className="cs-com-fe-img horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
