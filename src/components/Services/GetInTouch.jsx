import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="cs-widget-item">
      <div className="cs-single-link">
        <div className="cs-widget-title">
          <h6>Get In Touch</h6>
        </div>
        <div className="cs-widget-get-touch">
          <p>Contrary to popular belief, Lorem Ipsum.</p>
          <div className="email-phone-widget">
            <h6>
              <Link to="#">+1-416-8241228</Link>
            </h6>
            <h6>
              <Link to="#">info@email.com</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
