import React from "react";
import { Link } from "react-router-dom";
import ParallaxBackground from "@/components/DynamicBackground/ParallaxBackground";
import SvgIcon from "./SvgIcon";

import breadcrumbImg from "/assets/img/servicepgbanner.webp";

const BreadCrumb = ({ title }) => {
  return (
    <section className="cs-braidcrumb-wrap">
      <ParallaxBackground
        className={"img-scroll-parallax"}
        imageUrl={breadcrumbImg}
        speed={0.31}
        scale={1.5}
      />
      <div className="container">
        <div className="row cs_center">
          <div className="cs-bread-page-title-area">
            <div className="cs-page-title-in">
              <div className="cs-bread-cap">
                <SvgIcon />
                <span>{title}</span>
              </div>
              <div className="cs-page-title">
                <h2 className="cs_white_color">{title}</h2>
              </div>
            </div>
          </div>
          <div className="breadcrumb">
            <ul className="cs_mp0">
              <li>
                <Link to="/" className="cs-text_b_line">
                  <span>Home</span>
                </Link>
              </li>
              <li>.</li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
