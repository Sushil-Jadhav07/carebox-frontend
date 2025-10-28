import React from "react";
import MapHotspot from "./MapHotspot";
import ContactForm from "./ContactForm";

const MapFrom = () => {
  return (
    <section>
      <div className="cs-form-with-map">
        <div className="container-fluid">
          <div className="row cs_center cs_column_reverse_lg">
            <div className="col-lg-7 col-md-5">
              <MapHotspot />
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="cs-form-for-map">
                <div className="cs-form-cp-in cs-form-light">
                  <h4 className="mb-3">Get In Touch</h4>
                  <p className="mb-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classic random text.
                  </p>
                  <ContactForm style={"style2"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-section-height"></div>
    </section>
  );
};

export default MapFrom;
