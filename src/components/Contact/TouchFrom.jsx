import React from "react";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";

const TouchFrom = () => {
  return (
    <div>
      <div className="cs-section-height"></div>
      <div className="cs-form-with-map">
        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-lg-7 col-md-5">
              <div className="cs-map-half">
                <GoogleMap />
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="cs-form-for-map">
                <ContactForm style={"style2"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchFrom;
