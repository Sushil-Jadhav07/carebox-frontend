import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="cs-card-content-wrap">
      <div className="cs-card-icon">
        <svg
          width="32"
          height="19"
          viewBox="0 0 32 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4589_12050)">
            <path
              d="M0.869141 18.479L15.6856 9.5247L0.869141 0.570435V18.479Z"
              fill="#0A0A0A"
            />
            <path
              opacity="0.4"
              d="M0.869141 9.5247H15.6856L0.869141 0.570435V9.5247Z"
              fill="white"
            />
            <path
              d="M17.1875 18.479L32.0039 9.5247L17.1875 0.570435V18.479Z"
              fill="#0A0A0A"
            />
            <path
              opacity="0.4"
              d="M17.1875 9.5247H32.0039L17.1875 0.570435V9.5247Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_4589_12050">
              <rect
                width="31.1351"
                height="18"
                fill="white"
                transform="translate(0.869141 0.524658)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="cs-card-text">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
