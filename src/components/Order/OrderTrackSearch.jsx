import React, { useState } from "react";
import OrderTrackingStep from "./OrderTrackingStep";

const OrderTrackSearch = () => {
  const [activeTab, setActiveTab] = useState("awb");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [trackingData, setTrackingData] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchValue(""); // Clear search when switching tabs
    setSearchResults(null); // Clear results when switching tabs
    setError(null); // Clear error when switching tabs
    setTrackingData(null); // Clear tracking data when switching tabs
  };

  const fetchOrderStatus = async (awbNumber) => {
    try {
      const response = await fetch(`https://carebox-backend.onrender.com/api/order/fetchOrderStatusByAWB?awb_no=${encodeURIComponent(awbNumber)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const transformApiData = (apiData) => {
    // Use only orderStatuses array, ignore packageStatus
    const { orderStatuses = [] } = apiData;
    
    // Define all possible status steps in order
    const allPossibleStatuses = [
      { key: 'order created', label: 'Order Created' },
      { key: 'order shipped', label: 'Order Shipped' },
      { key: 'order pickup', label: 'Order Pickup' },
      { key: 'out for delivered', label: 'Out For Delivery' },
      { key: 'order delivered', label: 'Order Delivered' }
    ];

    // Sort all status records by record_time
    const apiStatuses = [...orderStatuses].sort((a, b) => {
      const dateA = new Date(a.record_time || a.created_at || a.updated_at);
      const dateB = new Date(b.record_time || b.created_at || b.updated_at);
      return dateA - dateB;
    });

    // Create a map of status text to API status data for quick lookup
    const statusMap = new Map();
    apiStatuses.forEach((status) => {
      const statusText = (status.staff_comment || status.status || status.name || '').toLowerCase().trim();
      // Try to match against all possible status keys
      allPossibleStatuses.forEach((possibleStatus) => {
        // Check if status text contains the key or vice versa, or exact match
        if (statusText.includes(possibleStatus.key) || 
            possibleStatus.key.includes(statusText) ||
            statusText === possibleStatus.key) {
          if (!statusMap.has(possibleStatus.key)) {
            statusMap.set(possibleStatus.key, status);
          }
        }
      });
    });

    // Build result array with all possible statuses
    return allPossibleStatuses.map((possibleStatus, index) => {
      const apiStatus = statusMap.get(possibleStatus.key);
      const isCompleted = !!apiStatus;

      if (apiStatus) {
        const recordTime = apiStatus.record_time || apiStatus.created_at || apiStatus.updated_at;
        return {
          id: apiStatus.id || index + 1,
          status: possibleStatus.label,
          date: new Date(recordTime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          }),
          time: new Date(recordTime).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }),
          location: apiStatus.location || apiStatus.warehouse_name || 'Unknown Location',
          isCompleted: isCompleted,
        };
      } else {
        // Status not found in API data - show as pending
        return {
          id: index + 1,
          status: possibleStatus.label,
          date: '',
          time: '',
          location: '',
          isCompleted: false,
        };
      }
    });
  };

  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    
    setIsSearching(true);
    setError(null);
    setSearchResults(null);
    setTrackingData(null);

    try {
      const apiData = await fetchOrderStatus(searchValue.trim());
      const transformedData = transformApiData(apiData);
      
      setSearchResults(transformedData);
      setTrackingData(apiData);
    } catch (error) {
      setError(error.message);
      setSearchResults(null);
      setTrackingData(null);
    } finally {
      setIsSearching(false);
    }
  };

  const getPlaceholder = () => {
    return activeTab === "awb" ? "Enter your AWB number..." : "Enter your Order/Ref. Number...";
  };

  return (
    <>
      <div className="cs-section-height"></div>
      <section className="cs-order-track-search">
        <div className="container">
          <div className="row cs_center">
            <div className="col-lg-12">
              <div className="cs-search-widget">
                {/* Tab Navigation */}
                <div className="cs-tab-navigation">
                  <button
                    onClick={() => handleTabChange("awb")}
                    className={`cs-tab-btn ${activeTab === "awb" ? "active" : ""}`}
                  >
                    AWB
                  </button>
                  <button
                    onClick={() => handleTabChange("order")}
                    className={`cs-tab-btn ${activeTab === "order" ? "active" : ""}`}
                  >
                    Order/Ref. Number
                  </button>
                </div>

                {/* Search Input */}
                <div className="cs-search-input-group">
                  <input
                    type="text"
                    placeholder={getPlaceholder()}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    className="cs-track-btn"
                    disabled={!searchValue.trim() || isSearching}
                  >
                    {isSearching ? "Searching..." : "Track Order"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <section className="cs-order-track-results">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs-order-track-error">
                  <div className="cs-error-message">
                    <h3>Unable to track your order</h3>
                    <p>{error}</p>
                    <p>Please check your AWB number and try again.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search Results Timeline */}
      {searchResults && !error && (
        <section className="cs-order-track-results">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs-order-track-results-content">
                  {/* Header with tracking number and status */}
                  <div className="cs-tracking-header">
                    <div className="cs-tracking-info">
                      <div className="cs-tracking-label">Tracking Number</div>
                      <div className="cs-tracking-number">{searchValue}</div>
                    </div>
                    <div className="cs-status-badge">
                      <span className="cs-status-dot"></span>
                      {searchResults.length > 0 
                        ? (() => {
                            const completedStatuses = searchResults.filter(s => s.isCompleted);
                            return completedStatuses.length > 0 
                              ? completedStatuses[completedStatuses.length - 1].status 
                              : searchResults[0].status;
                          })()
                        : 'Unknown'}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="cs-logi-order-track">
                    {searchResults.map((step, index) => {
                      // Find the last completed step index
                      const lastCompletedIndex = searchResults.reduce((lastIndex, s, idx) => {
                        return s.isCompleted ? idx : lastIndex;
                      }, -1);
                      
                      // Line should be green if we're before or at the last completed step
                      const shouldShowGreenLine = index <= lastCompletedIndex;
                      
                      return (
                        <div
                          key={step.id}
                          className={`cs-logi-order-track-step ${shouldShowGreenLine ? 'step-completed' : ''}`}
                        >
                          <OrderTrackingStep
                            status={step.status}
                            date={step.date}
                            time={step.time}
                            location={step.location}
                            isCompleted={step.isCompleted}
                            isLast={index === searchResults.length - 1}
                            stepNumber={index + 1}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary Information */}
                  {trackingData && (
                    <div className="cs-tracking-summary">
                      <div className="cs-summary-item">
                        <div className="cs-summary-label">Package ID</div>
                        <div className="cs-summary-value">{trackingData.package_id}</div>
                      </div>
                      <div className="cs-summary-item">
                        <div className="cs-summary-label">Order ID</div>
                        <div className="cs-summary-value">{trackingData.order_id}</div>
                      </div>
                      {searchResults.length > 0 && (
                        <div className="cs-summary-item">
                          <div className="cs-summary-label">Current Location</div>
                          <div className="cs-summary-value">{searchResults[searchResults.length - 1].location}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OrderTrackSearch;
