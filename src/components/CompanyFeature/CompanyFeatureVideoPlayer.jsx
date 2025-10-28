import React, { useState } from "react";
import { Link } from "react-router-dom";
import YouTubeModal from "@/components/VideoSection/YouTubeModal";

const companyData = {
  title: "Drive Your Business Forward with Leading Company",
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
  features: [
    {
      year: "2006",
      title: "Our Begins",
      text: "Flexible and efficient road transportation across local and international routes.",
    },
    {
      year: "2012",
      title: "Achievement",
      text: "Flexible and efficient road transportation across local and international routes.",
    },
  ],
  media: {
    video: {
      thumbnail: "/assets/img/ocean-cargo/ocean-wcu-video-img.jpg",
      link: "q5UWVgxt3gk",
    },
    image: "/assets/img/ocean-cargo/ocean-wcu-img.jpg",
  },
};

const CompanyFeatureVideoPlayer = () => {
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
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-com-feature-wrapper cs-feature-for-ocean-cargo">
        <div className="cs-height-100"></div>
        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-6 col-lg-12">
              <div className="container">
                <div className="cs-section-title-left-right sec-title-style-1">
                  <div className="cs-title-left-area">
                    <div className="cs-sec-title cs-max-w-640">
                      <h2 className="logi-splite cs-w-750">
                        {companyData.title}
                      </h2>
                      <div className="cs-height-30"></div>
                      <p className="cs-oc-wcu-p">{companyData.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-lg-w-control">
                <div className="cs-sec-title-height"></div>
              </div>

              <div className="cs-com-fe-content-in">
                {companyData.features.map((feature, index) => (
                  <React.Fragment key={index}>
                    <FeatureContent feature={feature} />
                    {index < companyData.features.length - 1 && (
                      <div className="cs-height-60"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="cs-img-with-video cs_center">
                <div className="cs-video-img">
                  <img
                    src={companyData.media.video.thumbnail}
                    alt="Company presentation"
                  />
                  <Link
                    onClick={() => openModal(companyData.media.video.link)}
                    to={"#"}
                    className="cs_video_block cs_style1 cs_video_open cs_round_btn"
                  >
                    Play
                  </Link>
                </div>
                <div>
                  <img
                    className="cs-oc-cargo-wcu-img"
                    src={companyData.media.image}
                    alt="Company achievement"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height-100"></div>
      </div>
      <YouTubeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={selectedVideoId}
      />
    </section>
  );
};

const FeatureContent = ({ feature }) => {
  return (
    <div className="cs-com-feature-content">
      <div className="cs-com-fe-item">
        <div className="cs-feature-title">
          <h5>{feature.title}</h5>
          <h2>{feature.year}</h2>
        </div>
        <div className="cs-com-fe-icon">
          <Icon />
        </div>
        <div className="cs-com-fe-text">
          <p>{feature.text}</p>
        </div>
      </div>
    </div>
  );
};

const Icon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.870972 18.2441L18.6072 9.24414L0.870972 0.244141V18.2441Z"
      fill="#D40511"
    />
    <path
      opacity="0.4"
      d="M0.870972 9.24414H18.6072L0.870972 0.244141V9.24414Z"
      fill="white"
    />
  </svg>
);

export default CompanyFeatureVideoPlayer;
