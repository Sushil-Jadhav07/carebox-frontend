import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { gsap, useGSAP, SplitType } from "@/lib/gsapConfig.JS";

const slides = [
  {
    id: 1,
    title: "Trusted Ocean Cargo Services Worldwide",
    image: "/assets/img/hero/ocean_hero_slider_1.jpg",
  },
  {
    id: 2,
    title: "Reliable Global Ocean Freight Solutions",
    image: "/assets/img/hero/ocean_hero_slider_2.jpg",
  },
  {
    id: 3,
    title: "Trusted Ocean Cargo Services Worldwide",
    image: "/assets/img/hero/ocean_hero_slider_3.jpg",
  },
];

const HeroSliderTwo = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!swiperRef.current) return;

      const swiperInstance = swiperRef.current;

      const handleSlideChange = () => {
        const activeSlideContent = document.querySelector(
          ".swiper-slide-active .logi-splite"
        );
        const activeSlideImage = document.querySelector(
          ".swiper-slide-active .slider-image"
        );

        if (activeSlideContent && activeSlideImage) {
          const childSplit = new SplitType(activeSlideContent, {
            type: "lines",
            lineClass: "split-child",
          });

          gsap.from(childSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            opacity: 0,
            ease: "power4",
            stagger: 0.1,
            rotation: 15,
            transformOrigin: "top",
          });

          gsap.from(activeSlideImage, {
            duration: 1.5,
            opacity: 0,
            scale: 1.5,
            ease: "power3.out",
            rotation: 20,
            transformOrigin: "center",
            onComplete: () => {
              gsap.to(activeSlideImage, {
                duration: 0.5,
                scale: 1,
                ease: "bounce.out",
              });
            },
          });
        }
      };

      swiperInstance.on("slideChangeTransitionStart", handleSlideChange);

      return () => {
        swiperInstance.off("slideChangeTransitionStart", handleSlideChange);
      };
    },
    {
      scope: containerRef,
      dependencies: [swiperRef.current],
      revertOnUpdate: true,
    }
  );

  return (
    <section ref={containerRef}>
      <div className="cs-hero-slider-wrap cs-hero-ocean-cargo">
        <div className="cs-hero-slider-content-wrap">
          <div className="cs-hero-slider-content">
            <div className="swiper hero-ocean-cargo-slider">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Autoplay, Parallax]}
                speed={1000}
                parallax={true}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="swiper-wrapper"
              >
                {slides.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="swiper-slide cs_center"
                  >
                    <div className="cs-hero-slide-content">
                      <div className="cs-hero-title">
                        <h1 className="logi-splite">{slide.title}</h1>
                      </div>
                      <div className="cs-hero-slider-btn">
                        <Link to="/about" className="cs-primary-btn">
                          <span>About Company</span>
                        </Link>
                      </div>
                    </div>
                    <div className="cs-hero-slider-img slider-image">
                      <img src={slide.image} alt="LogiHub" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="cs-hero-slider-arrow">
              <i
                className="flaticon-left-arrow swiper-button-prev-oc"
                onClick={() => swiperRef.current.slidePrev()}
              ></i>
              <i
                className="flaticon-left-arrow swiper-button-next-oc"
                onClick={() => swiperRef.current.slideNext()}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSliderTwo;
