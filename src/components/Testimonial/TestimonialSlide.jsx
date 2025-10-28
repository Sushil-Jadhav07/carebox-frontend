import React from "react";

const TestimonialSlide = ({ quote }) => {
  return (
    <div className="swiper-slide">
      <div className="cs-testi-slide-in">
        <div className="cs-testi-quote">
          <svg
            width="55"
            height="46"
            viewBox="0 0 55 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1272 46L39.4171 0H54.1012V46H30.1272ZM0.15979 46L9.44969 0H24.1337V46H0.15979Z"
              fill="#D40511"
            />
          </svg>
        </div>
        <h4>{quote}</h4>
      </div>
    </div>
  );
};

export default TestimonialSlide;
