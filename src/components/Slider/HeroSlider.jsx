import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { gsap, useGSAP, SplitType } from "@/lib/gsapConfig.JS";

const slides = [
  {
    id: 0,
    title: "Efficient and Reliable Logistics Solutions",
    image: "/assets/img/hero/home_1_hero_slider_2.jpg",
    thumb: "/assets/img/hero-slider-thumb-2.jpg",
    label: "Ocean Freight",
  },
  {
    id: 1,
    title: "Trusted and Efficient Supply Chain Logistics",
    image: "/assets/img/hero/home_1_hero_slider_3.jpg",
    thumb: "/assets/img/hero-slider-thumb-1.jpg",
    label: "Air Freight",
  },
  {
    id: 2,
    title: "Efficient Supply Chain Logistics",
    image: "/assets/img/hero/home_1_hero_slider_1.jpg",
    thumb: "/assets/img/hero-slider-thumb.jpg",
    label: "Land Transport",
  },
];

const HeroSlider = () => {
  const container = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const slideImagesRef = useRef([]);
  const logiSplitRefs = useRef([]);

  useGSAP(
    () => {
      if (!swiperInstanceRef.current) return;

      const resetAnimation = (elements) => {
        elements.forEach((el) => {
          if (el) gsap.set(el, { clearProps: "all" });
        });
      };

      const animateSlide = () => {
        resetAnimation(slideImagesRef.current);
        resetAnimation(logiSplitRefs.current);

        const activeIndex = swiperInstanceRef.current.realIndex;
        const activeSlideContent = logiSplitRefs.current[activeIndex];
        const activeSlideImage = slideImagesRef.current[activeIndex];

        if (activeSlideContent) {
          const childSplit = new SplitType(activeSlideContent, {
            type: "lines",
            lineClass: "split-child",
          });

          gsap.set(childSplit.lines, { overflow: "hidden" });
          gsap.from(childSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
          });
        }

        if (activeSlideImage) {
          gsap.from(activeSlideImage, {
            duration: 1.5,
            opacity: 0,
            scale: 1.2,
            ease: "power3.out",
          });
        }
      };

      swiperInstanceRef.current.on("slideChangeTransitionStart", animateSlide);

      return () => {
        swiperInstanceRef.current.off(
          "slideChangeTransitionStart",
          animateSlide
        );
      };
    },
    {
      dependencies: [swiperInstanceRef.current],
      revertOnUpdate: true,
      scope: container,
    }
  );

  return (
    <section ref={container}>
      <div className="cs-hero-slider-wrap cs-hero-home-1">
        <div className="cs-hero-slider-content-wrap">
          {/* Slider Controls */}
          <div className="cs-hero-slider-instrument">
            <div className="cs-hero-slider-controller">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slider-controler-item ${
                    activeSlide === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSlide(index);
                    swiperInstanceRef.current?.slideTo(index);
                  }}
                >
                  <h6>{`0${index + 1}`}</h6>
                  <p>{slide.label}</p>
                </div>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="cs-hero-slider-thumb">
              <div className="cs-thumb-in">
                {slides.map((slide, index) => (
                  <div key={slide.id} className="cs-hero-thumb-item">
                    <img
                      src={slide.thumb}
                      alt="LogiHub"
                      className="hero-thumb"
                      onClick={() => {
                        setActiveSlide(index);
                        swiperInstanceRef.current?.slideTo(index);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="cs-hero-slider-content">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              speed={600}
              loop={slides.length > 2}
              parallax={true}
              autoplay={
                slides.length > 2
                  ? { delay: 5000, disableOnInteraction: false }
                  : false
              }
              onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div className="swiper-slide cs_center">
                    {/* <div className="cs-hero-slide-content">
                      <div className="cs-hero-title">
                        <h1
                          className="logi-splite"
                          ref={(el) => (logiSplitRefs.current[index] = el)}
                        >
                          {slide.title}
                        </h1>
                      </div>
                      <div className="cs-hero-slider-btn">
                        <Link to="/about" className="cs-primary-btn">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div> */}
                    <div className="cs-hero-slider-img slider-image">
                      <img
                        ref={(el) => (slideImagesRef.current[index] = el)}
                        src={slide.image}
                        alt="LogiHub"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
