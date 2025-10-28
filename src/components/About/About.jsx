import React from "react";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import RevealImage from "@/components/RevealImage/RevealImage";
import { Link } from "react-router-dom";

const aboutData = {
  image: "/assets/img/aboutusimg.webp",
  experience: {
    years: 18,
    text: "Years Experience",
  },
  title: "About Us",
  description: "At Carebox, we bring over 25 years of combined experience in the courier industry. Based in Mumbai, we specialize in fast, reliable, and secure domestic shipping and local express courier services.",
  description2: "Our mission is simple: to provide exceptional courier solutions for both businesses and individuals. Whether it's an urgent delivery or a routine shipment, we ensure every package is handled with care and delivered on time.",
  description3: "Driven by trust, reliability, and efficiency, Carebox offers tailored services and real-time tracking to give you peace of mind with every shipment. We are your trusted courier partner, delivering across Mumbai and India, on time, every time.",
  listItems: [
    "Domestic Shipping",
    "Local Express Delivery", 
    "Real-time Tracking",
    "Secure Handling",
    "Business Solutions",
    "Personal Courier Services",
  ],
  button: {
    text: "Read More",
    link: "/about",
  },
};
const AboutSection = () => {
  return (
    <section>
      {/* <div className="cs-section-height"></div> */}
      <div className="cs-about-wrapper-1">
        <div className="cs-about-wrap-in">
          <div className="container-fluid">
            <div className="row cs_center">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="cs-about-img-area">
                  <RevealImage image={aboutData.image} className="horizontal" />
                  <DynamicBackground
                    className="cs-about-img-over-content anim_div_ShowRightSide "
                    dataSrc="/assets/img/experience-bg.svg"
                  >
                    {/* <div className="p-5">
                      <div className="cs-flex justify-content-center">
                        <h2 id="count5" className="amin_auto_count">
                          {aboutData.experience.years}
                        </h2>
                        <span className="cs-text-style-h2 cs-color-white">
                          +
                        </span>
                      </div>
                      <p>{aboutData.experience.text}</p>
                    </div> */}
                  </DynamicBackground>
                </div>
              </div>

              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="cs-about-content-wrap">
                  <div className="cs-about-content-in">
                    <div className="cs-about-title">
                      <h2 className="logi-splite">{aboutData.title}</h2>
                    </div>
                    <div className="cs-about-para">
                      <p>{aboutData.description}</p>
                      <p>{aboutData.description2}</p>
                      <p>{aboutData.description3}</p>
                    </div>
                    <div className="cs-about-list-wrap">
                      <ul>
                        {aboutData.listItems.slice(0, 3).map((item, index) => (
                          <li key={index}>
                            <i className="flaticon-verified"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {aboutData.listItems.slice(3).map((item, index) => (
                          <li key={index + 3}>
                            <i className="flaticon-verified"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="cs-primary-btn-wrap">
                      <div className="cs-primary-btn">
                        <Link
                          to={aboutData.button.link}
                          className="cs-primary-btn-in"
                        >
                          <span>{aboutData.button.text}</span>
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
    </section>
  );
};

export default AboutSection;
