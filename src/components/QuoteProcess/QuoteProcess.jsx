import React, { useState } from "react";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import TitleAnimation from "@/components/SectionTitle/TitleAnimation";

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: "",
    volume: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9- ]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.services) newErrors.services = "Please select a service.";
    if (!formData.volume) newErrors.volume = "Please select a volume.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert("Your message has been sent successfully!");

    setFormData({
      name: "",
      phone: "",
      services: "",
      volume: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section className="cs-wrap-q-p">
      <div className="cs-section-height"></div>
      <div className="cs-height-65"></div>
      <div className="cs-section-height-half"></div>
      <div className="cs-quote-process-wrap">
        <div className="container-fluid">
          <DynamicBackground
            className="cs-content-wrap-quote-process img-scroll-parallax img-scroll-object-zoom"
            dataSrc="/assets/img/process-quote-img.jpg"
          >
            <div className="cs-height-65"></div>
            <div className="row">
              <div className="col-xl-7 quote-flex-reverse">
                <div className="cs-left-text-container">
                  <div className="cs-stroke-text stroke-text">
                    <TitleAnimation className={"cs-text-style-h1 cs-w-800"}>
                      LOGIHUB FREE QUOTE
                    </TitleAnimation>
                  </div>
                  <h2 className="quote-title-text">Specialized Services</h2>
                </div>
                <div className="row cs-proces-wrap">
                  <div className="col-lg-6">
                    <div className="process-item">
                      <p>01</p>
                      <h6>Order Placement</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-item">
                      <p>02</p>
                      <h6>Inventory Management</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-item">
                      <p>03</p>
                      <h6>Transportation</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-item">
                      <p>04</p>
                      <h6>Customer Satisfaction</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="cs-quote-form-container">
                  <div className="quote-form-content-in">
                    <div className="cs-quote-title">
                      <h4>Request For a Free Quote</h4>
                    </div>
                    <div className="cs-quote-form">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          {errors.name && (
                            <small className="text-danger">{errors.name}</small>
                          )}
                        </div>
                        <div className="mb-3">
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            placeholder="+1-416-8241228"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          {errors.phone && (
                            <small className="text-danger">
                              {errors.phone}
                            </small>
                          )}
                        </div>
                        <div className="mb-3">
                          <select
                            className="cs-form-select"
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Select Services
                            </option>
                            <option value="Airfreight">Airfreight</option>
                            <option value="LandTransport">
                              Land Transport
                            </option>
                            <option value="OceanCargo">Ocean Cargo</option>
                          </select>
                          {errors.services && (
                            <small className="text-danger">
                              {errors.services}
                            </small>
                          )}
                        </div>
                        <div className="mb-3">
                          <select
                            className="cs-form-select"
                            name="volume"
                            value={formData.volume}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Select Volume
                            </option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                          </select>
                          {errors.volume && (
                            <small className="text-danger">
                              {errors.volume}
                            </small>
                          )}
                        </div>
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                          {errors.message && (
                            <small className="text-danger">
                              {errors.message}
                            </small>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="cs-primary-btn white-primary-btn"
                        >
                          Submit<i className="flaticon-right-arrow"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height-50"></div>
          </DynamicBackground>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
