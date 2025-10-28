import React, { useRef } from "react";
import { gsap, useGSAP, SplitType } from "@/lib/gsapConfig.JS";

const TitleAnimation = ({ children, className }) => {
  const titleRef = useRef(null);
  useGSAP(
    () => {
      if (titleRef.current) {
        const splitText = new SplitType(titleRef.current, { types: "lines" });

        gsap.from(splitText.lines, {
          duration: 1.1,
          yPercent: 100,
          opacity: 0,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: titleRef }
  );
  return (
    <h2 ref={titleRef} className={"logi-splite " + className}>
      {children}
    </h2>
  );
};

export default TitleAnimation;
