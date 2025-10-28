import React from "react";
import Hotspot from "./Hotspot";

const hotspots = [
  {
    id: 1,
    position: "hotspot-top-left",
    imageSrc: "assets/img/map/map-over-img.png",
    altText: "LogiHub",
    address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
  },
  {
    id: 2,
    position: "hotspot-top-right",
    imageSrc: "assets/img/map/map-over-img.png",
    altText: "LogiHub",
    address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
  },
  {
    id: 3,
    position: "hotspot-bottom-left",
    imageSrc: "assets/img/map/map-over-img.png",
    altText: "LogiHub",
    address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
  },
  {
    id: 4,
    position: "hotspot-bottom-right",
    imageSrc: "assets/img/map/map-over-img.png",
    altText: "LogiHub",
    address: "612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada",
  },
];

const MapHotspot = () => {
  return (
    <div className="cs-map-hotspot-wrap">
      <div className="hotspot-image-container">
        <div className="cs-hotspot-map-img">
          <img src="assets/img/map/map-htspot-img.png" alt="LogiHub" />
        </div>

        {hotspots.map((hotspot) => (
          <Hotspot
            key={hotspot.id}
            position={hotspot.position}
            imageSrc={hotspot.imageSrc}
            altText={hotspot.altText}
            address={hotspot.address}
          />
        ))}
      </div>
    </div>
  );
};

export default MapHotspot;
