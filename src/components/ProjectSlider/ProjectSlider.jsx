import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, EffectFade, Autoplay } from "swiper/modules";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";

const projects = [
  {
    id: 1,
    title: "Precision Logistic Services",
    image: "/assets/img/projects/project-slider-img-s1.jpg",
    thumb: "/assets/img/projects/slider-thumb.jpg",
  },
  {
    id: 2,
    title: "Precision Airfreight Services",
    image: "/assets/img/projects/project-slider-img-s2.jpg",
    thumb: "/assets/img/projects/slider-thumb-1.jpg",
  },
  {
    id: 3,
    title: "Precision Cargo Services",
    image: "/assets/img/projects/project-slider-img-s3.jpg",
    thumb: "/assets/img/projects/slider-thumb-2.jpg",
  },
];

const ProjectSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-project-slider-wrapper">
        <div className="cs-project-slider-content">
          <Swiper
            modules={[Navigation, Scrollbar, EffectFade, Autoplay]}
            effect="fade"
            loop
            slidesPerView="auto"
            scrollbar={{
              el: ".project-scrollbar",
              hide: false,
              draggable: true,
            }}
            className="project-slider"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <DynamicBackground
                  className="cs-project-slider-content-in"
                  dataSrc={project.image}
                >
                  <div className="container">
                    <div className="cs-project-slider-inner-content">
                      <div className="cs-pl-title">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="cs-pl-btn cs-primary-btn">
                        <Link to="/case-study">
                          View Project <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </DynamicBackground>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="ps-scrollbar-navigation">
            <div className="ps-scrollbar-navigation-in">
              <div className="swiper-scrollbar project-scrollbar"></div>
              <div className="cs-logi-arrow-wrap">
                <div className="logi-arrow-in">
                  <div
                    className="cs-ps-swiper-btn-prev logi-nvigate cs-arrow-left"
                    onClick={() => swiperRef.current.slidePrev()}
                  >
                    <i className="flaticon-right-arrow"></i>
                  </div>
                  <div
                    className="cs-ps-swiper-btn-next logi-nvigate cs-arrow-right"
                    onClick={() => swiperRef.current.slideNext()}
                  >
                    <i className="flaticon-right-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs-ps-slider-thumb">
            <div className="cs-thumb-in">
              {projects.map((project, index) => (
                <div key={project.id} className="cs-ps-thumb-item">
                  <img
                    src={project.thumb}
                    alt={`Thumbnail for ${project.title}`}
                    data-slide={index}
                    className="ps-thumb"
                    onClick={() => swiperRef.current.slideTo(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
