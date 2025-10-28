import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Accordion = ({ items, style }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const csaccordian = classNames("cs_accordian", {
    "light-border-accordian": style === "style2",
  });

  return (
    <div className={csaccordian}>
      {items.map((item, index) => (
        <div
          className={`cs_accordian_item cs_color_1 ${
            activeIndex === index ? "active" : ""
          }`}
          key={item.id}
        >
          <div
            className={classNames("cs_accordian_header", {
              "active cs_icon": activeIndex === index,
            })}
            onClick={() => handleClick(index)}
          >
            <h6 className="cs_accordian_title cs_m0">{item.title}</h6>
            <i className="flaticon-down-arrow"></i>
          </div>
          {activeIndex === index && (
            <div className="cs_accordian_body">
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
