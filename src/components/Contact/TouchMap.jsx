import React from "react";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import MapHotspot from "./MapHotspot";

const contactData = {
  title: "Get In Touch",
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classic random text.",
  offices: [
    {
      title: "Corporate Office",
      address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
      phone: "+1-416-8241228",
      email: "info@email.com",
    },
    {
      title: "Canada Office",
      address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
      phone: "+1-416-8241228",
      email: "info@email.com",
    },
  ],
};

const TouchMap = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-contact-page-content">
        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-5">
              <ContactInfo contactData={contactData} />
              <div className="cs-height-50"></div>

              <div className="cs-primary-btn">
                <Link to="/contact-us">
                  Contact Us
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-7">
              <MapHotspot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouchMap;
