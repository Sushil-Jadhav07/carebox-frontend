import React from "react";
import Accordion from "@/components/Accordion/Accordion";

const faqs = [
  {
    id: 1,
    title: "What services does your logistics company provide?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical.",
  },
  {
    id: 2,
    title:
      "How do you ensure the safety and security of goods during transportation?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical.",
  },
  {
    id: 3,
    title: "How do you handle customs clearance for international shipments?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical.",
  },
  {
    id: 4,
    title: "How do you ensure sustainability in your logistics operations?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical.",
  },
];

const ServiceFAQ = () => {
  return (
    <div className="cs-faq-wrap">
      <div className="cs_accordian">
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default ServiceFAQ;
