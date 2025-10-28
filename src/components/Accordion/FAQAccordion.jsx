import React, { useState } from "react";
import classNames from "classnames";
import LeftNavigation from "./LeftNavigation";
import Accordion from "./Accordion";

import faqData from "@/jsonData/faqData.json";

const FAQAccordion = ({ style }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const rowsizeLeft = classNames({
    "col-lg-4": style === "style2",
    "col-lg-3": style !== "style2",
  });

  const rowsizeRight = classNames({
    "col-lg-8": style === "style2",
    "col-lg-9": style !== "style2",
  });

  return (
    <div className="cs-faq-page-wrap">
      <div className="cs-faq-container-in">
        <div className="container">
          <div className="row">
            <div className={rowsizeLeft}>
              {style === "style2" && <h3>Frequently Asked Question</h3>}
              <LeftNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                style={style}
              />
            </div>
            <div className={rowsizeRight}>
              <div
                id={`${activeTab}-content`}
                className="cs-faq-wrap tab-content active"
              >
                <Accordion items={faqData[activeTab]} style={style} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
