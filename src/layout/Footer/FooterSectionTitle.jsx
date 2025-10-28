import React from "react";

const FooterSectionTitle = ({ title, children }) => {
  return (
    <div className="cs-footer-widget">
      <div className="cs-footer-widget-title">
        <h6>{title}</h6>
      </div>
      {children}
    </div>
  );
};

export default FooterSectionTitle;
