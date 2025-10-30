import React, { useState } from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { pinCodeList } from "@/jsonData/pinCodeData";

const Servicibility = () => {
  const [pincode, setPincode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Using real pin code list from jsonData

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

    // Local lookup in big pin code dataset
    try {
      const match = pinCodeList.find((item) => String(item.Pin).padStart(6, "0") === pincode);

      if (match) {
        setResult({
          pincode: pincode,
          isServicible: true,
          message: "Great! We provide service in this area.",
          details: {
            facilityCity: match.FacilityCity,
            facilityState: match.FacilityState,
            dispatchCenter: match.DispatchCenter,
            originCenter: match.OriginCenter,
            oda: match.ODA,
            zone: match.Zone,
            hub: match.hub || null
          }
        });
      } else {
        setResult({
          pincode: pincode,
          isServicible: false,
          message: "Sorry, we don't provide service in this area yet.",
          details: null
        });
      }
    } catch (e) {
      setError("Something went wrong while checking the pincode.");
    } finally {
      setIsChecking(false);
    }
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
                        {result.details && (
                          <div className="cs-result-details">
                            <table className="cs-result-table">
                              <thead>
                                <tr>
                                  <th>Facility City</th>
                                  <th>Facility State</th>
                                  <th>Dispatch Center</th>
                                  <th>Origin Center</th>
                                  <th>ODA</th>
                                  <th>Zone</th>
                                  {result.details.hub && <th>Hub</th>}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{result.details.facilityCity}</td>
                                  <td>{result.details.facilityState}</td>
                                  <td>{result.details.dispatchCenter}</td>
                                  <td>{result.details.originCenter}</td>
                                  <td>{result.details.oda}</td>
                                  <td>{result.details.zone}</td>
                                  {result.details.hub && <td>{result.details.hub}</td>}
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
