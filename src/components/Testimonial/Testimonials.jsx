import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useGSAP } from "@/lib/gsapConfig.JS";

import testimonialsData from "@/jsonData/testimonialsData.json";

const Testimonials = () => {
  const container = useRef(null);
  const swiperRef = useRef(null);

  useGSAP(
    () => {
      if (!swiperRef.current) return;
      function animateSlider() {
        document.querySelectorAll(".cs-user-single").forEach((item) => {
          item.classList.remove("active");
        });
        const activeIndex = swiperRef.current.realIndex;
        document
          .querySelector(`.cs-user-single[data-slide='${activeIndex}']`)
          ?.classList.add("active");
      }
      swiperRef.current.on("slideChangeTransitionStart", animateSlider);

      return () => {
        swiperRef.current.off("slideChangeTransitionStart", animateSlider);
      };
    },
    { dependencies: [swiperRef.current], scope: container }
  );

  return (
    <section ref={container}>
      <div className="cs-section-height"></div>
      <div className="cs-testi-wrap">
        <div className="container">
          <div className="cs-testi-wrap-in">
            <div className="cs-testi-content">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Autoplay]}
                speed={1000}
                parallax={true}
                loop={true}
                slidesPerView="auto"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="home1-testi-slider1"
              >
                {testimonialsData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
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
                      <h4>"{testimonial.text}"</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="cs-testi-user-container">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={index}
                    data-slide={index}
                    className="cs-user-single home1-testi-sc"
                    onClick={() => swiperRef.current.slideToLoop(index)}
                  >
                    <div className="cs-user-img">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="cs-user-info">
                      <h6>
                        <span>—</span>
                        {testimonial.name}
                      </h6>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs-testi-arrow">
          <div
            className="cs-testi-right home1-testi-swiper-button-next"
            onClick={() => swiperRef.current.slideNext()}
          >
            <i className="flaticon-right-arrow"></i>
          </div>
          <div
            className="cs-testi-left home1-testi-swiper-button-prev"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <i className="flaticon-right-arrow"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
