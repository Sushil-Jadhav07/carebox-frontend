import React from "react";
import FeatureItem from "./FeatureItem";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import RevealImage from "@/components/RevealImage/RevealImage";

const features = [
  {
    id: 1,
    title: "Our Begins",
    year: "2006",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
  {
    id: 2,
    title: "Achievement",
    year: "2012",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
  {
    id: 3,
    title: "Concepts",
    year: "2024",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
];

const CompanyFeature = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-com-feature-wrapper cs-style-1">
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"Business Forward with Leading Company"}
              style={"style2"}
              to="/contact"
              rightLinkText="Contact Us"
            />
          </div>
        </div>

        <div className="cs-sec-title-height"></div>

        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-6 col-lg-12">
              <div className="cs-com-fe-content-in">
                {features.map((feature) => (
                  <div key={feature.id}>
                    <FeatureItem feature={feature} />
                    {feature.id !== features.length && (
                      <div className="cs-height-60"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <RevealImage
                image="/assets/img/company-feature-style-2.png"
                className="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFeature;
