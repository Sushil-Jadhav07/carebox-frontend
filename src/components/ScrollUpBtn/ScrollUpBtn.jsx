import React, { useRef, useState } from "react";
import { useGSAP } from "@/lib/gsapConfig.JS";

const ScrollUpBtn = () => {
  const container = useRef();
  const scrollUpBtnRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(
    (context, contextSafe) => {
      const onClickGood = contextSafe(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      const handleScroll = contextSafe(() => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition >= 350);
      });

      scrollUpBtnRef.current.addEventListener("click", onClickGood);
      document.addEventListener("scroll", handleScroll);

      return () => {
        scrollUpBtnRef.current.removeEventListener("click", onClickGood);
        document.removeEventListener("scroll", handleScroll);
      };
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <span
        className={`cs_scrollup ${isVisible ? "cs_scrollup_show" : ""}`}
        ref={scrollUpBtnRef}
      >
        <i className="flaticon-top"></i>
      </span>
    </div>
  );
};

export default ScrollUpBtn;
