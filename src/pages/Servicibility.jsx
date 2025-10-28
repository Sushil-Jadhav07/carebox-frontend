import React, { useState } from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const Servicibility = () => {
  const [pincode, setPincode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Sample servicibility data - replace with actual API data
  const serviciblePincodes = [
    "110001", "110002", "110003", "400001", "400002", "560001", "560002",
    "600001", "600002", "700001", "700002", "500001", "500002", "380001"
  ];

  const handleCheckPincode = async () => {
    if (!pincode.trim()) {
      setError("Please enter a pincode");
      return;
    }

    if (pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }

    setIsChecking(true);
    setError("");
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      const isServicible = serviciblePincodes.includes(pincode);
      setResult({
        pincode: pincode,
        isServicible: isServicible,
        message: isServicible 
          ? "Great! We provide service in this area." 
          : "Sorry, we don't provide service in this area yet.",
        deliveryTime: isServicible ? "1-2 business days" : null
      });
      setIsChecking(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCheckPincode();
    }
  };

  return (
    <>
      <BreadCrumb title={"Servicibility"} />
      <div className="cs-section-height"></div>
      <section className="cs-servicibility-page">
        <div className="container">
          <div className="row cs_center">
            <div className="col-lg-12 col-md-10">
              <div className="cs-servicibility-content">
                {/* Header Banner */}
                <div className="cs-servicibility-banner">
                  <div className="cs-banner-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h1>CHECK & SERVICIBILITY</h1>
                </div>

                {/* Pincode Check Card */}
                <div className="cs-pincode-check-card">
                  <div className="cs-card-header">
                    <h3>Check Pincode :</h3>
                  </div>
                  
                  <div className="cs-pincode-input-group">
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      onKeyPress={handleKeyPress}
                      className="cs-pincode-input"
                      maxLength="6"
                    />
                  </div>

                  {error && (
                    <div className="cs-error-message">
                      {error}
                    </div>
                  )}

                  <div className="cs-check-btn-wrapper">
                    <button
                      onClick={handleCheckPincode}
                      disabled={isChecking}
                      className="cs-check-pincode-btn"
                    >
                      {isChecking ? "Checking..." : "Check Pincode"}
                    </button>
                  </div>

                  {/* Result Display */}
                  {result && (
                    <div className={`cs-result-card ${result.isServicible ? 'success' : 'error'}`}>
                      <div className="cs-result-icon">
                        {result.isServicible ? <FaCheckCircle /> : <FaTimesCircle />}
                      </div>
                      <div className="cs-result-content">
                        <h4>Pincode: {result.pincode}</h4>
                        <p className="cs-result-message">{result.message}</p>
                        {result.deliveryTime && (
                          <p className="cs-delivery-time">
                            Expected delivery: <strong>{result.deliveryTime}</strong>
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div className="cs-servicibility-info">
                  <div className="cs-info-grid">
                    <div className="cs-info-item">
                      <div className="cs-info-icon">
                        <FaCheckCircle />
                      </div>
                      <div className="cs-info-content">
                        <h4>Service Available</h4>
                        <p>We provide fast and reliable delivery services in servicible areas</p>
                      </div>
                    </div>
                    <div className="cs-info-item">
                      <div className="cs-info-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="cs-info-content">
                        <h4>Wide Coverage</h4>
                        <p>Our network covers major cities and towns across the country</p>
                      </div>
                    </div>
                    <div className="cs-info-item">
                      <div className="cs-info-icon">
                        <FaCheckCircle />
                      </div>
                      <div className="cs-info-content">
                        <h4>Quick Delivery</h4>
                        <p>Express delivery options available for urgent shipments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicibility;
