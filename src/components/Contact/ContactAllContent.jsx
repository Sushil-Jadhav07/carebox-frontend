import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const contactData = {
  title: "Get In Touch",
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classic random text.",
  offices: [
    {
      title: "Corporate Office",
      address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
      phone: "+1-416-8241228",
      email: "info@email.com",
    },
    {
      title: "Canada Office",
      address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
      phone: "+1-416-8241228",
      email: "info@email.com",
    },
  ],
};

const ContactAllContent = ({ style }) => {
  return (
    <section>
      <div className="cs-contact-page-content">
        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-5">
              <ContactInfo contactData={contactData} />
            </div>
            <div className="col-xl-7">
              <ContactForm style={style} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAllContent;
