import React from "react";
import RevealImage from "@/components/RevealImage/RevealImage";
import { Link } from "react-router-dom";

const aboutData = {
  title: "Drive Your Business Forward with LogiHub",
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  image: "/assets/img/ocean-cargo/ocean-cargo-about-img.png",
  services: [
    "Freight Forwarding",
    "Warehousing & Delivery",
    "Customs Clearance",
    "Warehousing & Delivery",
    "Customs Clearance",
    "Freight Forwarding",
  ],
};

const AboutStyleThree = () => {
  const { title, description, image, services } = aboutData;
  return (
    <>
      <div className="cs-section-height"></div>
      <div className="cs-about-style-2">
        <div className="cs-about-wrapper-1 cs-about-2 cs-about-img-left0">
          <div className="cs-about-wrap-in">
            <div className="container-fluid">
              <div className="row flex_end">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="cs-about-img-area">
                    <RevealImage className={"horizontal"} image={image} />
                  </div>
                  <div className="container">
                    <div className="cs-about-list-wrap">
                      <ul className="two-column-grid">
                        {services.map((service, index) => (
                          <li key={index}>
                            <i className="flaticon-verified"></i>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="cs-about-content-wrap">
                    <div className="cs-about-content-in">
                      <div className="cs-about-title">
                        <h2 className="logi-splite">{title}</h2>
                      </div>
                      <div className="cs-about-para">
                        <p>{description}</p>
                        <div className="cs-height-30"></div>
                        <p>{description}</p>
                      </div>
                      <div className="cs-primary-btn-wrap">
                        <div className="cs-primary-btn">
                          <Link to="/contact-us" className="cs-primary-btn-in">
                            <span>Contact Us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyleThree;
