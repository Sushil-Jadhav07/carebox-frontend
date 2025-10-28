import React from "react";
import FAQAccordion from "@/components/Accordion/FAQAccordion";
import ContactAllContent from "@/components/Contact/ContactAllContent";
import PricingSection from "@/components/Pricing/PricingSection";
import BraidcrumbStyleTwo from "@/components/BreadCrumb/BraidcrumbStyleTwo";

const Pricing = () => {
  return (
    <>
      <BraidcrumbStyleTwo title={"Pricing"} />
      <div className="cs-section-height"></div>
      <FAQAccordion style={"style2"} />
      <div className="cs-section-height"></div>
      <PricingSection />
      <div className="cs-section-height"></div>
      <ContactAllContent style={"style2"} />
      <div className="cs-section-height"></div>
    </>
  );
};

export default Pricing;
