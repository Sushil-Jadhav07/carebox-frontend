import React from "react";
import TeamSection from "@/components/TeamMembers/TeamSection";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CtaSection from "@/components/CtaSection/CtaSection";

const Team = () => {
  return (
    <>
      <BreadCrumb title={"Team"} />
      <div className="cs-section-height"></div>
      <SectionTitle
        title={"Meet Our Ultra Expert Logistics Team"}
        style="style3"
      />
      <div className="cs-section-height-half"></div>
      <TeamSection />
      <CtaSection style={"style2"} />
    </>
  );
};

export default Team;
