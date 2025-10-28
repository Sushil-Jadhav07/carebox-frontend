import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "@/lib/gsapConfig.JS";
import MenuItem from "./MenuItem";
import Logo from "@/components/Logo/Logo";

import navData from "@/jsonData/navData.json";

const MainHeader = ({ setIsSideBarOpen, ref }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const animateNav = contextSafe(() => {
        gsap.to(mobileNavRef.current, {
          // autoAlpha: isNavOpen ? 1 : 0,
          display: isNavOpen ? "block" : "none",
          duration: 0.3,
        });
      });
      animateNav();
    },
    { dependencies: [isNavOpen], scope: mobileNavRef }
  );

  return (
    <div className="cs_main_header">
      <div className="container-fluid">
        <div className="cs_main_header_in">
          {/* Main Header Left Area */}
          <div className="cs_main_header_left">
            <Logo />
          </div>

          {/* Main Header Middle Area */}
          <div className="cs-logi-header-middle">
            <div className="cs_nav cs_medium">
              <ul
                className={`cs_nav_list ${
                  isNavOpen ? "cs_show-moblie-nav-list" : ""
                }`}
                ref={mobileNavRef}
              >
                {navData.map((item, index) => (
                  <MenuItem item={item} key={index} />
                ))}
              </ul>
              {/* <span
                onClick={() => setIsNavOpen((prev) => !prev)}
                id="navBar"
                className={`cs_munu_toggle ${
                  isNavOpen ? "cs_toggle_active" : ""
                }`}
              >
                <span></span>
              </span> */}
            </div>
          </div>

          {/* Main Header Right Area */}
          <div className="cs_main_header_right">
            <div className="cs-header-additional-item">
              <Link to="/order-tracking">
                <span className="cs_accent_color">+</span> Track Your Order
              </Link>
            </div>
            <div className="cs-header-login-btn">
              <Link to="https://carebox.asynk.in/" target="_blank" className="cs-login-btn">
                Login
              </Link>
            </div>
            {/* <div
              className="cs_toolbox"
              ref={ref ? ref : null}
              onClick={(e) => {
                e.stopPropagation();
                setIsSideBarOpen((prev) => !prev);
              }}
            >
              <span className="cs_icon_btn">
                <span className="cs_icon_btn_in">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
