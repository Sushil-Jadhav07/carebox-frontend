import React from "react";
import { Link } from "react-router-dom";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";

import errorSlideImg from "/assets/img/error-side-image.jpg";
import textImg from "/assets/img/404-text-img.png";

const errorData = {
  title: "Oops! Page Not Found",
  message:
    "We’re sorry, but the page you requested couldn’t be found. It might have been moved, deleted, or perhaps the URL was mistyped. But don’t worry, we’re here to get you back on track.",
};

const ErrorPage = () => {
  return (
    <>
      <div className="cs-height-150"></div>
      <div className="cs-section-height"></div>
      <section>
        <div className="error-content-wrap">
          <div className="container-fluid">
            <div className="row cs_center">
              <div className="col-lg-7">
                <div className="error-content-wrap-in">
                  <DynamicBackground
                    className="cs-404 anim_div_ShowRightSide"
                    dataSrc={textImg}
                  >
                    404
                  </DynamicBackground>

                  <h4>{errorData.title}</h4>
                  <p>{errorData.message}</p>
                  <div className="cs-primary-btn">
                    <Link to={"/"}>
                      {"Go To Home"}
                      <i className="flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cs-error-page-img reveal-img-wrap vertical">
                  <div className="reveal-img-inner">
                    <img src={errorSlideImg} alt="LogiHub" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs-section-height"></div>
    </>
  );
};

export default ErrorPage;
