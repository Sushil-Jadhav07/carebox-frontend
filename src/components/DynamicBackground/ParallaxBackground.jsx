import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig.JS";

const ParallaxBackground = ({
  className,
  imageUrl,
  speed = 0.5,
  scale = 1,
}) => {
  const parallaxRef = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add("(min-width: 768px)", () => {
      if (parallaxRef.current) {
        gsap.fromTo(
          parallaxRef.current,
          { yPercent: -20 * speed, ease: "none", scale: 1 },
          {
            yPercent: 20 * speed,
            scale: scale,
            duration: 1.5,
            ease: "Power4.easeInOut",
            scrollTrigger: {
              scrub: true,
              trigger: parallaxRef.current.parentElement,
              start: "top bottom",
              end: "bottom top",
              ease: "Power2.out",
            },
          }
        );
      }
    });
    return () => gsap.matchMedia().revert();
  }, [speed]);

  return (
    <img
      src={imageUrl}
      ref={parallaxRef}
      className={className}
      style={{
        position: "absolute",
        width: "100%",
      }}
    />
  );
};

export default ParallaxBackground;
