import React from "react";
import OfficeInfo from "./OfficeInfo";

const ContactInfo = ({ contactData }) => {
  return (
    <div className="cs-contact-in">
      <h2>{contactData.title}</h2>
      <p className="cs-contact-text">{contactData.description}</p>
      <div className="cs-logi-office-wrap">
        {contactData.offices.map((office, index) => (
          <React.Fragment key={index}>
            <OfficeInfo
              title={office.title}
              address={office.address}
              phone={office.phone}
              email={office.email}
            />
            {index < contactData.offices.length - 1 && (
              <div className="cs-border-v-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
