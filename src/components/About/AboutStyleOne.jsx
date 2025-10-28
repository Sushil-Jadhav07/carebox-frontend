import React from "react";
import RevealImage from "@/components/RevealImage/RevealImage";
import TitleAnimation from "@/components/SectionTitle/TitleAnimation";
import { Link } from "react-router-dom";

const aboutData = {
  title: "About Us",
  description: "At Carebox, we bring over 25 years of combined experience in the courier industry. Based in Mumbai, we specialize in fast, reliable, and secure domestic shipping and local express courier services.",
  description2: "Our mission is simple: to provide exceptional courier solutions for both businesses and individuals. Whether it's an urgent delivery or a routine shipment, we ensure every package is handled with care and delivered on time.",
  description3: "Driven by trust, reliability, and efficiency, Carebox offers tailored services and real-time tracking to give you peace of mind with every shipment. We are your trusted courier partner, delivering across Mumbai and India, on time, every time.",
  image: "/assets/img/aboutusimg.webp",
  services: [
    "Domestic Shipping",
    "Local Express Delivery", 
    "Real-time Tracking",
    "Secure Handling",
    "Business Solutions",
    "Personal Courier Services",
  ],
};

const AboutStyleOne = () => {
  const { title, description, description2, description3, image, services } = aboutData;

  return (
    <>
      <div className="cs-section-height"></div>
      <div className="cs-about-layout-modern">
        <div className="cs-about-wrapper-1">
          <div className="cs-about-wrap-in">
            <div className="cs-about-container">
              <div className="cs-about-main-content">
                <div className="cs-about-left-section">
                  {/* Image Section */}
                  <div className="cs-about-img-area">
                    <RevealImage className={"horizontal"} image={image} />
                  </div>
                  
                  {/* Services List Below Image */}
                  <div className="cs-about-list-wrap">
                    <ul className="cs-services-grid">
                      {services.map((service, index) => (
                        <li key={index} className="service-item">
                          <span className="service-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="currentColor"/>
                            </svg>
                          </span>
                          <span className="service-text">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="cs-about-right-section">
                  {/* Content Section */}
                  <div className="cs-about-content-in">
                    <div className="cs-about-title">
                      <TitleAnimation>{title}</TitleAnimation>
                    </div>
                    <div className="cs-about-para">
                      <p>{description}</p>
                      <p>{description2}</p>
                      <p>{description3}</p>
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
    </>
  );
};

export default AboutStyleOne;
