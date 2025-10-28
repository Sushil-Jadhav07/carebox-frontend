import React from "react";
import classNames from "classnames";

const MovingText = ({ text, style }) => {
  const fontSize = classNames({
    "cs-text-style-h1": style !== "style2",
  });
  return (
    <>
      <h2 className={fontSize}>{text}</h2>
      {style !== "style2" ? (
        <svg
          width="42"
          height="40"
          viewBox="0 0 122 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4589_497)">
            <path
              d="M0.386719 69.8221L58.0062 34.9999L0.386719 0.177734V69.8221Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M0.386719 34.9999H58.0062L0.386719 0.177734V34.9999Z"
              fill="white"
            />
            <path
              d="M63.8484 69.8221L121.468 34.9999L63.8484 0.177734V69.8221Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M63.8484 34.9999H121.468L63.8484 0.177734V34.9999Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_4589_497">
              <rect
                width="121.081"
                height="70"
                fill="white"
                transform="translate(0.386719)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="71"
          height="41"
          viewBox="0 0 71 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4589_9041)">
            <path
              d="M0.935547 40.7474L33.861 20.8491L0.935547 0.950684V40.7474Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M0.935547 20.8491H33.861L0.935547 0.950684V20.8491Z"
              fill="white"
            />
            <path
              d="M37.1992 40.7474L70.1246 20.8491L37.1992 0.950684V40.7474Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M37.1992 20.8491H70.1246L37.1992 0.950684V20.8491Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="69.1892"
                height="40"
                fill="white"
                transform="translate(0.935547 0.849121)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

export default MovingText;
