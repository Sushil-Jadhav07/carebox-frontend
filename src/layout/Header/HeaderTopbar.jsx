import React from "react";
import { Link } from "react-router-dom";

const HeaderTopbar = () => {
  return (
    <div className="cs_logi_topbar">
      <div className="container-fluid">
        <div className="cs-topbar-container">
          <div className="cs-topbar-left">
            <span className="cs-small-text cs-color-black">
              612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada
            </span>
          </div>
          <div className="cs-logi-topbar-right">
            <div className="cs-topbar-social">
              <ul>
                <li>
                  <Link to="#" className="cs-text_b_line">
                    <span>FB</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="cs-text_b_line">
                    <span>TW</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="cs-text_b_line">
                    <span>LI</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="cs-text_b_line">
                    <span>IG</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="cs-text_b_line">
                    <span>PIN</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
