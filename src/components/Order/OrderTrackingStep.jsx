import React from "react";
import { 
  FaFileAlt, 
  FaBox, 
  FaTruck, 
  FaHome, 
  FaCheck 
} from "react-icons/fa";

const OrderTrackingStep = ({ status, date, time, location, isCompleted, isLast, stepNumber }) => {
  const getIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'order confirmed':
      case 'order created':
        return <FaFileAlt />;
      case 'shipment prepared':
      case 'order shipped':
      case 'order pickup':
        return <FaBox />;
      case 'delivery in progress':
      case 'order in transit':
      case 'out for delivery':
        return <FaTruck />;
      case 'order delivered':
      case 'order delivery':
        return <FaHome />;
      default:
        return <FaFileAlt />;
    }
  };

  return (
    <div className="cs-logi-order-track-step">
      <div className="cs-logi-order-track-status">
        <div className={`cs-logi-order-track-status-dot ${isCompleted ? 'completed' : 'pending'}`}>
          <span className="cs-status-icon">{getIcon(status)}</span>
          {isCompleted && <span className="cs-checkmark"><FaCheck /></span>}
        </div>
        {!isLast && <div className="cs-logi-order-track-status-line"></div>}
      </div>
      <div className="cs-logi-order-track-text">
        <p className="cs-logi-order-track-text-stat">{status}</p>
        {date && <span className="cs-logi-order-track-text-date">{date}</span>}
        {time && <span className="cs-logi-order-track-text-time">{time}</span>}
        {/* {location && <span className="cs-logi-order-track-text-location">{location}</span>} */}
      </div>
    </div>
  );
};

export default OrderTrackingStep;
