import React from "react";
import { Link } from "react-router-dom";

const BraidcrumbStyleTwo = ({ title }) => {
  return (
    <section>
      <div class="cs-braidcrumb-wrap cs-bread-style-2">
        <div class="container">
          <div class="row cs_center">
            <div class="cs-bread-page-title-area">
              <div class="cs-page-title-in">
                <div class="cs-page-title">
                  <h2 className="cs_white_color">{title}</h2>
                </div>
                <div class="breadcrumb">
                  <ul class="cs_mp0">
                    <li>
                      <Link to="/" class="cs-text_b_line">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>.</li>
                    <li>{title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraidcrumbStyleTwo;
