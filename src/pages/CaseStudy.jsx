import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import CtaSection from "@/components/CtaSection/CtaSection";
import CaseLists from "@/components/CaseStudy/CaseLists";

const CaseStudy = () => {
  return (
    <>
      <BreadCrumb title={"Case Study"} />
      <div className="cs-section-height"></div>
      <CaseLists />
      <CtaSection style={"style2"} bg={"none"} />
      <div className="cs-section-height"></div>
      <ClientAreaAbout />
    </>
  );
};

export default CaseStudy;
