import React from "react";
import { useParams } from "react-router-dom";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import CtaSection from "@/components/CtaSection/CtaSection";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";

const ServiceDetails = () => {
  const { servicesId } = useParams();
  return (
    <>
      <BreadCrumb title={"Services Details"} />
      <ServiceDetailsContent servicesId={servicesId} />
      <ClientAreaAbout />
      <CtaSection type="style3" />
    </>
  );
};

export default ServiceDetails;
