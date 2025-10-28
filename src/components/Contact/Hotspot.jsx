import React from "react";

const Hotspot = ({ position, imageSrc, altText, address }) => {
  return (
    <div className={`hotspot ${position}`}>
      <div className="hotspot-button"></div>
      <div className="hotspot-label">
        <div className="cs-map-card">
          <img src={imageSrc} alt={altText} />
          <p className="cs_white_color">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Hotspot;
