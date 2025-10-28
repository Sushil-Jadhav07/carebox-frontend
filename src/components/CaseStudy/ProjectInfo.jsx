import React from "react";

const ProjectInfo = ({ clientName, category, timeline }) => {
  return (
    <div className="cs-project-info">
      <div className="cs-project-info-in">
        <div className="cs-widget-title">
          <h5>Project information</h5>
        </div>
        <div className="cs-info-item">
          <svg
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4589_11241)">
              <path
                d="M0.216797 14.4645L11.7407 7.50008L0.216797 0.535645V14.4645Z"
                fill="#D40511"
              />
              <path
                opacity="0.4"
                d="M0.216797 7.50008H11.7407L0.216797 0.535645V7.50008Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4589_11241">
                <rect
                  width="24.2162"
                  height="14"
                  fill="white"
                  transform="translate(0.216797 0.500061)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="cs-p-info-text">
            <span className="cs-small-text">Client Name:</span>
            <h6>{clientName}</h6>
          </div>
        </div>
        <div className="cs-info-item">
          <svg
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4589_11241)">
              <path
                d="M0.216797 14.4645L11.7407 7.50008L0.216797 0.535645V14.4645Z"
                fill="#D40511"
              />
              <path
                opacity="0.4"
                d="M0.216797 7.50008H11.7407L0.216797 0.535645V7.50008Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4589_11241">
                <rect
                  width="24.2162"
                  height="14"
                  fill="white"
                  transform="translate(0.216797 0.500061)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="cs-p-info-text">
            <span className="cs-small-text">Category:</span>
            <h6>{category}</h6>
          </div>
        </div>
        <div className="cs-info-item">
          <svg
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4589_11241)">
              <path
                d="M0.216797 14.4645L11.7407 7.50008L0.216797 0.535645V14.4645Z"
                fill="#D40511"
              />
              <path
                opacity="0.4"
                d="M0.216797 7.50008H11.7407L0.216797 0.535645V7.50008Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4589_11241">
                <rect
                  width="24.2162"
                  height="14"
                  fill="white"
                  transform="translate(0.216797 0.500061)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="cs-p-info-text">
            <span className="cs-small-text">Timeline:</span>
            <h6>{timeline}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
