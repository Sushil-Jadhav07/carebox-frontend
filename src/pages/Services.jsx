import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ServicesSection from "@/components/Services/ServicesSection";
import Testimonials from "@/components/Testimonial/Testimonials";
import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
import Counter from "@/components/Counter/Counter";
import CtaSection from "@/components/CtaSection/CtaSection";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import ServiceOfferList from "@/components/Services/ServiceOfferList";

const Services = () => {
  return (
    <>
      <BreadCrumb title={"Domestic "} />
      {/* <ServicesSection /> */}
      <ServiceOfferList />
      {/* <ExpertiseSection style="style3" /> */}
      {/* <Testimonials /> */}
      <Counter style="style2" />
      {/* <div className="cs-section-height"></div> */}
      {/* <ClientAreaAbout /> */}
      {/* <CtaSection style="style3" /> */}
    </>
  );
};

export default Services;
