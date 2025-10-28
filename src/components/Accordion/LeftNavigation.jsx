import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const LeftNavigation = ({ activeTab, onTabChange, style }) => {
  const tabs = [
    { id: "tab1", label: "About Company" },
    { id: "tab2", label: "Services" },
    { id: "tab3", label: "History" },
    { id: "tab4", label: "Our Goal" },
    { id: "tab5", label: "Refund Policy" },
    { id: "tab6", label: "Privacy Policy" },
  ];

  const navigationwrap = classNames("cs-left-navigation-wrap", {
    "light-left-nav": style === "style2",
  });
  return (
    <div className={navigationwrap}>
      <div className="cs-left-nav-in">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              id={`${tab.id}-tab`}
              className={`cs-text_b_line tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <Link to="#">
                <span>{tab.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNavigation;
