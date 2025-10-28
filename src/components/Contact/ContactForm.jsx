import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import classNames from "classnames";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="cs-primary-btn" disabled={pending}>
      {pending ? "Submiting..." : "Submit"}
      <i className="flaticon-right-arrow"></i>
    </button>
  );
};

const ContactForm = ({ style }) => {
  const formContain = useRef(null);

  const formAction = async (formData) => {
    const Name = formData.get("name");
    const Email = formData.get("email");
    const Phone = formData.get("phone");
    const Message = formData.get("message");

    //server action this position
    await new Promise((resolve) => setTimeout(resolve, 1000));

    formContain.current.reset();
  };

  const contactpage = classNames({
    "cs-contact-page-form-wrap": style !== "style2",
  });
  const formlight = classNames("cs-form-cp-in", {
    "cs-form-light": style === "style2",
  });

  return (
    <div className={contactpage}>
      <div className={formlight}>
        <form action={formAction} ref={formContain}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="example@domain.com"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="+1-416-8241228"
              name="phone"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>
          <SubmitBtn />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
