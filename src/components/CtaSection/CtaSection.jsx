import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import ParallaxBackground from "@/components/DynamicBackground/ParallaxBackground";
import TitleAnimation from "@/components/SectionTitle/TitleAnimation";

const CtaSection = ({ style, bg = null }) => {
  const csCtaCont = classNames({
    "cs-cta-center-in": style !== "style2" || style == null,
    "cs-cta-hor-in": style === "style2",
  });
  const csCtaTitle = classNames({
    "cs-cta-center-title": style !== "style2" || style == null,
    "cs-cta-hor-title": style === "style2",
  });

  const ctaFullwHorizontal = classNames({
    "cs-cta-fullw-horizontal cs-cta-center":
      style !== "style2" || style == null,
    "cs-cta-fullw-horizontal cs_center": style === "style2",
    "cta-no-bg": bg === "none",
  });

  return (
    <section>
      {style === "style2" && <div className="cs-section-height"></div>}

      <div className={ctaFullwHorizontal}>
        {bg !== "none" && (
          <ParallaxBackground
            className={"img-scroll-parallax"}
            imageUrl={"/assets/img/cta-fullw-650.jpg"}
            speed={0.31}
          />
        )}

        <div className="container">
          <div className="row">
            <div className={csCtaCont}>
              <div className={csCtaTitle}>
                <TitleAnimation className={"cs_white_color"}>
                  Experience Reliable Logistics Contact Us Today
                </TitleAnimation>
              </div>
              <div className="cs-cta-btn">
                <div className="cs-primary-btn">
                  <Link to="/contact-us">
                    Free Quote
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
