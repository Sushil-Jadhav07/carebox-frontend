import React from "react";
import classNames from "classnames";

const services = [
  {
    id: 1,
    icon: "flaticon-shipping",
    title: "Land Freight Services",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classic.",
  },
  {
    id: 2,
    icon: "flaticon-cargo-ship",
    title: "Ocean Freight Solutions",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classic.",
  },
  {
    id: 3,
    icon: "flaticon-airplane",
    title: "Air Cargo Transportation",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classic.",
  },
];

const ExpertiseSection = ({ style }) => {
  const expertiseWrap = classNames("cs-expertise-wrap expert-area-style-1", {
    "expert-area-no-bg": style === "style2",
    "expert-full-zig": style === "style3",
  });
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className={expertiseWrap}>
        <div className="container-fluid">
          <div className="row">
            <div className="cs-expert-area-content">
              {services.map((service) => (
                <div key={service.id} className="cs-expert-area-item">
                  <div className="cs-exp-icon-title">
                    <div className="cs-exp-icon svg-left-to-right-animation-wrap">
                      <span className="svg-left-to-right-animation">
                        <i className={service.icon}></i>
                        <i className={service.icon}></i>
                      </span>
                    </div>
                    <div className="cs-exp-title">
                      <h5>{service.title}</h5>
                    </div>
                  </div>
                  <div className="cs-exp-text">
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
