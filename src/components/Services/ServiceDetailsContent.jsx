import React from "react";
import ServiceInnerContent from "./ServiceInnerContent";
import GetInTouch from "./GetInTouch";
import DownloadBrochure from "./DownloadBrochure";
import ServiceList from "./ServiceList";

import serviceDetails from "@/jsonData/servicePosts.json";

const ServiceDetailsContent = ({ servicesId }) => {
  const serviceDetailsData = serviceDetails.find(
    (post) => post.serviceId === parseInt(servicesId)
  );

  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-page-single-wrap cs-service-single">
        <div className="cs-page-single-wrap-in">
          <div className="container">
            <div className="row cs_column_reverse_lg">
              <div className="col-lg-4">
                <div className="reverse-widget">
                  <ServiceList />
                  <DownloadBrochure />
                  <GetInTouch />
                </div>
              </div>
              <div className="col-lg-8">
                <ServiceInnerContent serviceDetailsData={serviceDetailsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-section-height"></div>
    </section>
  );
};

export default ServiceDetailsContent;
