import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import TitleAnimation from "./TitleAnimation";
import SvgIcon from "@/components/BreadCrumb/SvgIcon";

const SectionTitle = ({
  captext,
  title,
  style,
  to,
  rightLinkText = "Read More",
}) => {
  const sectionTitleClasses = classNames({
    "cs-section-title-left-right sec-title-style-1":
      style !== "style3" || style === null || style === undefined,
    "cs-section-title-center sec-title-style-2": style === "style3",
  });

  const buttonClasses = classNames({
    "cs-team-btn": style === "style2",
    "cs-primary-btn": style !== "style2",
  });
  const posationClasses = classNames({
    "cs-title-left-area":
      style !== "style3" || style === null || style === undefined,
    "cs-title-center-area": style === "style3",
  });
  return (
    <div className={sectionTitleClasses}>
      <div className={posationClasses}>
        {captext && (
          <div className="cs-sec-caption">
            <div className="cs-cap-icon">
              <SvgIcon />
            </div>
            <div className="cs-cap-text">{captext}</div>
          </div>
        )}
        <div className="cs-sec-title cs-max-w-640">
          <TitleAnimation>{title}</TitleAnimation>
        </div>
      </div>
      {style !== "style3" && (
        <div className="cs-title-right-area">
          <div className={buttonClasses}>
            <Link to={to} className="cs-text_b_line">
              {style === "style2" ? (
                <span>{rightLinkText}</span>
              ) : (
                rightLinkText
              )}
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
