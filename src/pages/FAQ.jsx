import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContactAllContent from "@/components/Contact/ContactAllContent";
import FAQAccordion from "@/components/Accordion/FAQAccordion";

const FAQ = () => {
  return (
    <>
      <BreadCrumb title={"FAQ"} />
      <div className="cs-section-height"></div>
      <FAQAccordion />
      <div className="cs-section-height"></div>
      <ContactAllContent style={"style2"} />
      <div className="cs-section-height"></div>
    </>
  );
};

export default FAQ;
