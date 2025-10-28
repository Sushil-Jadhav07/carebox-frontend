import React from "react";
import ServiceInnerCard from "./ServiceInnerCard";
import ServiceFAQ from "./ServiceFAQ";

const ServiceInnerContent = ({ serviceDetailsData: contentData }) => {
  return (
    <div className="cs-page-single-content-wrap">
      <div className="cs-page-content-in">
        <h4>{contentData.title}</h4>
        <p>{contentData.paragraphs}</p>
        <div className="cs-single-content-gap"></div>
        <img src={contentData.imageSrc} alt="LogiHub" />
        <div className="cs-single-content-gap"></div>
        {contentData.sections.map((section, index) => (
          <React.Fragment key={index}>
            <h6>{section.title}</h6>
            <p>{section.content}</p>
            <div className="cs-single-content-gap"></div>
          </React.Fragment>
        ))}
        <div className="cs-card-wrap">
          <div className="row cs-card-in">
            {contentData.features.map((feature) => (
              <div key={feature.id} className="col-lg-6">
                <ServiceInnerCard
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
        <h4>{contentData.FrequentlyQuestion.title}</h4>
        <p>{contentData.FrequentlyQuestion.content}</p>
        <div className="cs-single-content-gap"></div>
        <ServiceFAQ />
      </div>
    </div>
  );
};

export default ServiceInnerContent;
