import React from "react";
import MovingText from "./MovingText";

const movingTextData = [
  { text: "Speed" },
  { text: "Precision" },
  { text: "Excellence" },
];
const MovingTextSection = ({ style }) => {
  return (
    <div>
      <div className="cs-section-height"></div>
      <div className="cs-text-moving-wrap">
        <div className="cs_text-moving_in">
          <div className="cs_text-moving">
            {movingTextData.map((item, index) => (
              <MovingText style={style} key={index} text={item.text} />
            ))}
          </div>{" "}
          <div className="cs_text-moving">
            {movingTextData.map((item, index) => (
              <MovingText style={style} key={index} text={item.text} />
            ))}
          </div>
          <div className="cs_text-moving">
            {movingTextData.map((item, index) => (
              <MovingText style={style} key={index} text={item.text} />
            ))}
          </div>
          <div className="cs_text-moving">
            {movingTextData.map((item, index) => (
              <MovingText style={style} key={index} text={item.text} />
            ))}
          </div>
          <div className="cs_text-moving">
            {movingTextData.map((item, index) => (
              <MovingText style={style} key={index} text={item.text} />
            ))}
          </div>
          <div className="cs_text-moving">
            {movingTextData.map((item, index) => (
              <MovingText style={style} key={index} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingTextSection;
