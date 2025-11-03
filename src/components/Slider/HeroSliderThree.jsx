// HeroSliderThree.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { gsap, useGSAP, SplitType } from "@/lib/gsapConfig.JS";
import { Link, useNavigate } from "react-router-dom";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { pinCodeList } from "@/jsonData/pinCodeData";

const slides = [
  {
    id: 1,
    title: "Reliable Courier Services, Delivered Right",
    subtitle: "With 25+ years of expertise, Carebox provides fast, secure, and affordable domestic and local courier services to meet all your shipping needs.",
    image: "assets/img/air-freight/banner1.webp",
    bgImg: "/assets/img/air-freight/banner1.webp",
  },
  {
    id: 2,
    title: "Fast, Secure, and Trusted Delivery Solutions",
    subtitle: "Whether it’s local express or nationwide shipping, Carebox guarantees timely, reliable deliveries with real-time tracking for your peace of mind.",
    image: "assets/img/air-freight/hbanner1.webp",
    bgImg: "/assets/img/air-freight/banner2.webp",
  },
  {
    id: 3,
    title: "Your Trusted Partner in Shipping",
    subtitle: "Carebox, Mumbai-based and customer-focused, offers tailored courier solutions with over two decades of industry experience, ensuring your parcels arrive safely and on time",
    image: "assets/img/air-freight/hbanner1.webp",
    bgImg: "/assets/img/air-freight/banner3.webp",
  },
];

const HeroSliderThree = () => {
  const [currentSlider, setcurrentSlider] = useState(null);
  const [activeTab, setActiveTab] = useState('tracking');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [trackingResult, setTrackingResult] = useState(null);
  const [pincodeResult, setPincodeResult] = useState(null);
  const [error, setError] = useState('');
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      if (!swiperRef.current) return;

      const swiperInstance = swiperRef.current;

      const handleSlideChange = () => {
        setcurrentSlider(swiperInstance.realIndex);

        const activeSlideContent = document.querySelector(
          ".swiper-slide-active .logi-splite"
        );
        const activeSlideImage = document.querySelector(
          ".swiper-slide-active .slider-image"
        );

        gsap.set(".swiper-slide .logi-splite, .swiper-slide .slider-image", {
          clearProps: "all",
        });

        if (activeSlideContent) {
          const splitText = new SplitType(activeSlideContent, {
            types: "lines",
            lineClass: "split-child",
          });

          gsap.from(splitText.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
          });
        }

        if (activeSlideImage) {
          gsap.from(activeSlideImage, {
            duration: 1.5,
            opacity: 0,
            scale: 1.5,
            ease: "power3.out",
          });
        }
      };

      swiperInstance.on("slideChangeTransitionStart", handleSlideChange);

      return () => {
        swiperInstance.off("slideChangeTransitionStart", handleSlideChange);
      };
    },
    {
      scope: containerRef,
      dependencies: [currentSlider],
      revertOnUpdate: true,
    }
  );

  const handleControllerClick = (slideIndex) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
    }
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

  const handleTrackOrder = async () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setError('');
    setIsTracking(true);
    setTrackingResult(null);

    try {
      const apiData = await fetchOrderStatus(trackingNumber.trim());
      const transformedData = transformApiData(apiData);
      
      // Find the last completed status
      const completedStatuses = transformedData.filter(s => s.isCompleted);
      const lastStatus = completedStatuses.length > 0 
        ? completedStatuses[completedStatuses.length - 1].status 
        : transformedData[0].status;

      setTrackingResult({
        trackingNumber: trackingNumber,
        status: lastStatus,
        data: transformedData,
        trackingData: apiData
      });
    } catch (error) {
      setError(error.message);
      setTrackingResult(null);
    } finally {
      setIsTracking(false);
    }
  };

  const handleCheckPincode = async () => {
    if (!pincode.trim()) {
      setError('Please enter a pincode');
      return;
    }

    if (pincode.length !== 6) {
      setError('Please enter a valid 6-digit pincode');
      return;
    }

    setError('');
    setIsCheckingPincode(true);
    setPincodeResult(null);

    // Local lookup in pin code dataset
    try {
      const match = pinCodeList.find((item) => String(item.Pin).padStart(6, "0") === pincode);

      if (match) {
        setPincodeResult({
          pincode: pincode,
          isServiceable: true,
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
        setPincodeResult({
          pincode: pincode,
          isServiceable: false,
          message: "Sorry, we don't provide service in this area yet.",
          details: null
        });
      }
    } catch (e) {
      setError("Something went wrong while checking the pincode.");
    } finally {
      setIsCheckingPincode(false);
    }
  };

  // Navigate to full pages
  const handleNavToTracking = () => {
    navigate('/order-tracking');
  };

  const handleNavToServiceability = () => {
    navigate('/servicibility');
  };

  return (
    <section ref={containerRef}>
      <div className="cs-hero-slider-wrap cs-hero-air-freight">
        <div className="cs-hero-slider-content-wrap">
          <div className="cs-hero-slider-content">
            <div className="swiper hero1-slider-air">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Autoplay, Parallax]}
                // speed={1000}
                parallax={true}
                // loop={true}
                // autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="swiper-wrapper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide
                    key={slide.id}
                    className="swiper-slide air-swiper-slider"
                  >
                    <div className="cs-hero-slide-content">
                      <div className="cs-hero-left">
                        <div className="cs-hero-title">
                          <h1 className="logi-splite">{slide.title}</h1>
                        </div>
                        <div className="cs-hero-subtitle">
                          <p className="cs_white_color">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="cs-hero-slider-btn">
                          <Link to="/about" className="cs-primary-btn">
                            <span>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="cs-hero-slider-img slider-image">
                      <img src={slide.bgImg} alt="LogiHub" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="cs-air-hero-controller">
              <div className="cs-air-slider-con-in">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`cs-air-sli-con-item slider-controler-item-air ${
                      index === currentSlider && "active"
                    }`}
                    data-slide={index}
                    onClick={() => handleControllerClick(index)}
                  >
                    <div className="cs-hero-sl-border"></div>
                    <h6>{String(index + 1).padStart(2, "0")}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Form */}
        <div className="quick-access-form">
          <div className="quick-access-header">
            <h3>Quick Access</h3>
          </div>

          <div className="quick-access-tabs">
            <button
              onClick={() => {
                setActiveTab('tracking');
                setError('');
                setTrackingResult(null);
                setPincodeResult(null);
              }}
              className={`quick-access-tab ${activeTab === 'tracking' ? 'active' : ''}`}
            >
              <MdLocationOn size={20} />
              <span>Tracking</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('serviceability');
                setError('');
                setTrackingResult(null);
                setPincodeResult(null);
              }}
              className={`quick-access-tab ${activeTab === 'serviceability' ? 'active' : ''}`}
            >
              <MdLocalShipping size={20} />
              <span>Serviceability</span>
            </button>
          </div>

          <div className="quick-access-content">
            {error && (
              <div className="quick-access-error">
                {error}
              </div>
            )}

            {activeTab === 'tracking' ? (
              <div className="quick-access-form-group">
                <label>AWB Number</label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => {
                    setTrackingNumber(e.target.value);
                    setError('');
                    setTrackingResult(null);
                  }}
                  placeholder="Enter your AWB number..."
                  disabled={isTracking}
                />
                <button 
                  onClick={handleTrackOrder} 
                  className="quick-access-btn"
                  disabled={!trackingNumber.trim() || isTracking}
                >
                  {isTracking ? 'Tracking...' : 'Track Order'}
                </button>

                {/* Tracking Results */}
                {trackingResult && trackingResult.data && (
                  <div className="quick-access-result" style={{ 
                    backgroundColor: '#f0f9ff',
                    border: '1px solid #0ea5e9'
                  }}>
                    <div className="result-header" style={{ color: '#0369a1' }}>
                      Tracking: {trackingResult.trackingNumber}
                    </div>
                    <div className="result-text">
                      Status: <span style={{ color: '#059669', fontWeight: '600' }}>{trackingResult.status}</span>
                    </div>
                    
                    <button 
                      onClick={handleNavToTracking}
                      style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        marginTop: '12px'
                      }}
                    >
                      View Full Timeline
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="quick-access-form-group">
                <label>Check Pincode</label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 6) {
                      setPincode(value);
                      setError('');
                      setPincodeResult(null);
                    }
                  }}
                  placeholder="Enter Pincode"
                  maxLength={6}
                  disabled={isCheckingPincode}
                />
                <p className="input-hint">Enter 6-digit pincode</p>
                <button 
                  onClick={handleCheckPincode} 
                  className="quick-access-btn"
                  disabled={pincode.length !== 6 || isCheckingPincode}
                >
                  {isCheckingPincode ? 'Checking...' : 'Check Pincode'}
                </button>

                {/* Pincode Results */}
                {pincodeResult && (
                  <div className="quick-access-result" style={{ 
                    backgroundColor: pincodeResult.isServiceable ? '#f0fdf4' : '#fef2f2',
                    border: `1px solid ${pincodeResult.isServiceable ? '#10b981' : '#ef4444'}`
                  }}>
                    <div className="result-header" style={{ color: pincodeResult.isServiceable ? '#059669' : '#dc2626' }}>
                      Pincode: {pincodeResult.pincode}
                    </div>
                    <div className="result-text">
                      {pincodeResult.message}
                    </div>
                    {pincodeResult.details && (
                      <div className="result-details" style={{ marginTop: '12px', fontSize: '12px' }}>
                        <div style={{ marginBottom: '6px', fontWeight: '600' }}>Service Details:</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', fontSize: '11px' }}>
                          {pincodeResult.details.facilityCity && (
                            <div>
                              <strong>City:</strong> {pincodeResult.details.facilityCity}
                            </div>
                          )}
                          {pincodeResult.details.facilityState && (
                            <div>
                              <strong>State:</strong> {pincodeResult.details.facilityState}
                            </div>
                          )}
                          {pincodeResult.details.dispatchCenter && (
                            <div>
                              <strong>Dispatch:</strong> {pincodeResult.details.dispatchCenter}
                            </div>
                          )}
                          {pincodeResult.details.originCenter && (
                            <div>
                              <strong>Origin:</strong> {pincodeResult.details.originCenter}
                            </div>
                          )}
                          {pincodeResult.details.zone && (
                            <div>
                              <strong>Zone:</strong> {pincodeResult.details.zone}
                            </div>
                          )}
                          {pincodeResult.details.oda && (
                            <div>
                              <strong>ODA:</strong> {pincodeResult.details.oda}
                            </div>
                          )}
                          {pincodeResult.details.hub && (
                            <div style={{ gridColumn: 'span 2' }}>
                              <strong>Hub:</strong> {pincodeResult.details.hub}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    <button 
                      onClick={handleNavToServiceability}
                      style={{
                        backgroundColor: pincodeResult.isServiceable ? '#10b981' : '#ef4444',
                        color: 'white',
                        marginTop: '12px'
                      }}
                    >
                      View Full Details
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="quick-access-footer">
            Need help? <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSliderThree;