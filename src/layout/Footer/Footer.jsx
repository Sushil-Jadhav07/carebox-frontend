import React from "react";
import FooterSectionTitle from "./FooterSectionTitle";
import ContactInfo from "./ContactInfo";
import UsefulLinks from "./UsefulLinks";
import Newsletter from "./Newsletter";
import CopyArea from "./CopyArea";

const Footer = () => {
  return (
    <footer>
      <div className="cs-logi-footer-container">
        <div className="cs-logi-footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <FooterSectionTitle title="Corporate Office">
                  <ContactInfo
                    address="612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada"
                    phone="+1-416-8241228"
                    email="info@email.com"
                  />
                </FooterSectionTitle>
              </div>
              <div className="col-lg-3 col-md-6">
                <FooterSectionTitle title="Canada Office">
                  <ContactInfo
                    address="612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada"
                    phone="+1-416-8241228"
                    email="info@email.com"
                  />
                </FooterSectionTitle>
              </div>
              <div className="col-lg-2 col-md-5">
                <FooterSectionTitle title="Useful Link">
                  <UsefulLinks />
                </FooterSectionTitle>
              </div>
              <div className="col-lg-4 col-md-7">
                <FooterSectionTitle title="Newsletter">
                  <Newsletter />
                </FooterSectionTitle>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <CopyArea
            logoAlt="LogiHub"
            brandText="Delivering Excellence in Global Logistics."
            copyrightText=" All Rights Reserved."
            companyName="Carebox"
          />
        </div>
        <div className="cs-logi-footer-border">
          <svg
            width="1920"
            height="186"
            viewBox="0 0 1920 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M1919.95 15.0784C1789.84 47.7321 1593.01 73.75 1313.98 21.8595C940.467 -47.6007 736.04 72.8343 688.434 185.993M0.135498 174.227C71.8468 137.994 149.172 106.307 231.119 82.6053C550.484 -9.76492 1181.35 52.3115 1168.87 185.973"
              stroke="white"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
