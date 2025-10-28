import React from "react";
import ContactAllContent from "@/components/Contact/ContactAllContent";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import GoogleMap from "@/components/Contact/GoogleMap";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const ContactUs = () => {
  return (
    <>
      <BreadCrumb title={"Contact Us"} />
      <div className="cs-section-height"></div>
      <ContactAllContent />
      <div className="cs-section-height"></div>
      {/* <ClientAreaAbout /> */}
      <GoogleMap />
    </>
  );
};

export default ContactUs;
