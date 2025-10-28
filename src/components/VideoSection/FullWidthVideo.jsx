import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import YouTubeModal from "./YouTubeModal";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";

const videoData = [
  {
    type: "youtube",
    thumbnail: "/assets/img/full-w-video-thumbnail.jpg",
    videoUrl: "q5UWVgxt3gk", // Only the video ID is needed
  },
  {
    type: "local",
    videoSrc: "/assets/video/full-w-video-2.mp4",
  },
  {
    type: "local",
    videoSrc: "/assets/video/full-w-video-1.mp4",
  },
];

const FullWidthVideo = () => {
  const swiperRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId("");
  };

  return (
    <>
      <div className="cs-section-height"></div>
      <div className="cs-full-width-video-wrapper">
        <div className="cs-full-width-video-in">
          <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            ref={swiperRef}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            scrollbar={{
              el: ".video-scrollbar",
              hide: false,
              draggable: true,
            }}
            slidesPerView="auto"
            loop={true}
            className="video-slider"
          >
            {videoData.map((video, index) => (
              <SwiperSlide key={index}>
                {video.type === "youtube" ? (
                  <DynamicBackground
                    className="cs-video-content-in"
                    dataSrc={video?.thumbnail}
                  >
                    <div
                      onClick={() => openModal(video.videoUrl)}
                      className="cs_video_block cs_style1 cs_video_open cs_round_btn"
                    >
                      Play Video
                    </div>
                  </DynamicBackground>
                ) : (
                  <div className="cs-video-content-in">
                    <div className="cs-project-slider-inner-content">
                      <div className="cs-video-wrapper">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="cs-video"
                        >
                          <source src={video.videoSrc} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
            <div className="ps-scrollbar-navigation">
              <div className="ps-scrollbar-navigation-in">
                <div className="swiper-scrollbar video-scrollbar"></div>
                <div className="cs-logi-arrow-wrap">
                  <div className="logi-arrow-in">
                    <div
                      className="cs-vs-swiper-btn-prev logi-nvigate cs-arrow-left"
                      onClick={() => swiperRef.current.slidePrev()}
                    >
                      <i className="flaticon-right-arrow"></i>
                    </div>
                    <div
                      className="cs-vs-swiper-btn-next logi-nvigate cs-arrow-right"
                      onClick={() => swiperRef.current.slideNext()}
                    >
                      <i className="flaticon-right-arrow"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>

      {/* Custom YouTube Modal */}
      <YouTubeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={selectedVideoId}
      />
    </>
  );
};

export default FullWidthVideo;
