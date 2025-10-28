import React from "react";
import { Link } from "react-router-dom";

const HeaderSideBar = ({ className, ref }) => {
  return (
    <div className={className}>
      <button className="cs_close" ref={ref ? ref : null}></button>
      <div className="cs_side_header_overlay"></div>
      <div className="cs_side_header_in">
        <div className="cs-sidebar-about-brand">
          <Link className="cs_site_branding" to="/">
            <img src="/assets/img/logo_black_text.png" alt="Logo" />
          </Link>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="cs-sidebar-middle-area">
          <p>612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada</p>
          <div className="cs-sidebar-emai-phone">
            <Link to="#" className="cs-text-style-h6">
              +1-416-8241228
            </Link>
            <Link to="#" className="cs-text-style-h6">
              info@email.com
            </Link>
          </div>
          <div className="cs-common-icon-style cs-sidebar-social">
            <ul>
              <li>
                <Link to="#">
                  <i className="flaticon-facebook-app-symbol"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="flaticon-linkedin-big-logo"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="flaticon-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="flaticon-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cs-sidebar-bottom-area">
          <form className="cs-logi-newsletter">
            <input
              className="cs-newsletter-email"
              type="email"
              placeholder="Enter Your Email Address"
              required
            />
            <button
              className="cs-newsletter-btn svg-left-to-right-animation-wrap"
              type="submit"
            >
              Subscribe
              <span className="svg-left-to-right-animation">
                <i className="flaticon-right-arrow"></i>
                <i className="flaticon-right-arrow"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderSideBar;
