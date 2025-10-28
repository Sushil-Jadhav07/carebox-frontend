import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig.JS";

const RevealImage = ({ image, className }) => {
  const revealWrapRef = useRef(null);
  const revealInnerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: revealWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
          scrub: false,
        },
      });

      if (className.includes("vertical")) {
        tl.fromTo(
          revealInnerRef.current,
          { xPercent: 110 },
          { xPercent: 0, duration: 1, ease: "expo.inOut" }
        );
        tl.fromTo(
          imgRef.current,
          { xPercent: -50 },
          { xPercent: 0, duration: 1, ease: "expo.inOut" },
          0
        );
      } else if (className.includes("horizontal")) {
        tl.fromTo(
          revealInnerRef.current,
          { xPercent: -110 },
          { xPercent: 0, duration: 1, ease: "expo.inOut" }
        );
        tl.fromTo(
          imgRef.current,
          { xPercent: 80 },
          { xPercent: 0, duration: 1, ease: "expo.inOut" },
          0
        );
      }
      return () => {
        tl.kill();
      };
    },
    { scope: revealWrapRef }
  );

  return (
    <div
      className={`cs-about-img reveal-img-wrap ${className}`}
      ref={revealWrapRef}
    >
      <div className="reveal-img-inner" ref={revealInnerRef}>
        <img src={image} alt="LogiHub" ref={imgRef} />
      </div>
    </div>
  );
};

export default RevealImage;
