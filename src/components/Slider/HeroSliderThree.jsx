// HeroSliderThree.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { gsap, useGSAP, SplitType } from "@/lib/gsapConfig.JS";
import { Link, useNavigate } from "react-router-dom";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";

const slides = [
  {
    id: 1,
    title: "Reliable Courier Services, Delivered Right",
    subtitle: "With 25+ years of expertise, Carebox provides fast, secure, and affordable domestic and local courier services to meet all your shipping needs.",
    image: "assets/img/air-freight/banner1.png",
    bgImg: "/assets/img/air-freight/banner1.png",
  },
  {
    id: 2,
    title: "Fast, Secure, and Trusted Delivery Solutions",
    subtitle: "Whether it’s local express or nationwide shipping, Carebox guarantees timely, reliable deliveries with real-time tracking for your peace of mind.",
    image: "assets/img/air-freight/hbanner1.png",
    bgImg: "/assets/img/air-freight/banner2.png",
  },
  {
    id: 3,
    title: "Your Trusted Partner in Shipping",
    subtitle: "Carebox, Mumbai-based and customer-focused, offers tailored courier solutions with over two decades of industry experience, ensuring your parcels arrive safely and on time",
    image: "assets/img/air-freight/hbanner1.png",
    bgImg: "/assets/img/air-freight/banner3.png",
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

  // Sample tracking data - replace with actual API data
  const sampleTrackingData = [
    {
      id: 1,
      status: "Order Created",
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      location: "Delhi",
      isCompleted: true,
    },
    {
      id: 2,
      status: "Order Shipped",
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      location: "Delhi Hub",
      isCompleted: true,
    },
    {
      id: 3,
      status: "Order In Transit",
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      location: "Mumbai Hub",
      isCompleted: true,
    },
    {
      id: 4,
      status: "Order Delivery",
      date: "Expected",
      time: "Tomorrow",
      location: "Mumbai",
      isCompleted: false,
    },
  ];

  // Sample serviceable pincodes - replace with actual API data
  const serviceablePincodes = [
    "110001", "110002", "110003", "400001", "400002", "560001", "560002",
    "600001", "600002", "700001", "700002", "500001", "500002", "380001"
  ];

  const handleTrackOrder = () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setError('');
    setIsTracking(true);
    setTrackingResult(null);

    // Simulate API call
    setTimeout(() => {
      setTrackingResult({
        trackingNumber: trackingNumber,
        status: 'In Transit',
        data: sampleTrackingData,
        currentLocation: 'Mumbai Hub',
        expectedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()
      });
      setIsTracking(false);
    }, 2000);
  };

  const handleCheckPincode = () => {
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

    // Simulate API call
    setTimeout(() => {
      const isServiceable = serviceablePincodes.includes(pincode);
      setPincodeResult({
        pincode: pincode,
        isServiceable: isServiceable,
        message: isServiceable 
          ? "Great! We provide service in this area." 
          : "Sorry, we don't provide service in this area yet.",
        deliveryTime: isServiceable ? "1-2 business days" : null
      });
      setIsCheckingPincode(false);
    }, 1500);
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
                speed={1000}
                parallax={true}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
              <MdLocalShipping size={20} />
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
              <MdLocationOn size={20} />
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
                {trackingResult && (
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
                    <div className="result-text">
                      Location: {trackingResult.currentLocation}
                    </div>
                    <button 
                      onClick={handleNavToTracking}
                      style={{
                        backgroundColor: '#0ea5e9',
                        color: 'white'
                      }}
                    >
                      View Details
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
                    {pincodeResult.deliveryTime && (
                      <div className="result-delivery">
                        Delivery: {pincodeResult.deliveryTime}
                      </div>
                    )}
                    <button 
                      onClick={handleNavToServiceability}
                      style={{
                        backgroundColor: pincodeResult.isServiceable ? '#10b981' : '#ef4444',
                        color: 'white'
                      }}
                    >
                      Check More
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