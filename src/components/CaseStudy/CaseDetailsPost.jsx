import React from "react";
import { Link } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";
import PhoneCTA from "./PhoneCTA";
import Card from "./Card";
import Accordion from "@/components/Accordion/Accordion";

const CaseDetailsPost = ({ caseDetailsData }) => {
  const {
    id,
    projectInfo,
    phoneCTA,
    cards,
    faqItems,
    title,
    description,
    image,
    content,
    projectimg,
    quote,
  } = caseDetailsData;

  return (
    <section>
      <div className="cs-page-single-wrap cs-service-single single-content-left">
        <div className="cs-page-single-wrap-in">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="cs-single-widget-wrap">
                  <div className="cs-widget-in">
                    <div className="cs-widget-item">
                      <ProjectInfo {...projectInfo} />
                    </div>
                    <div className="cs-widget-item">
                      <PhoneCTA {...phoneCTA} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-12 col-md-12">
                <div className="cs-page-single-content-wrap">
                  <div className="cs-page-content-in">
                    <img src={image} alt="LogiHub" />
                    <div className="cs-single-content-gap"></div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="cs-single-content-gap"></div>
                    {content.map((section, index) => (
                      <div key={index}>
                        {section.heading && <h6>{section.heading}</h6>}
                        {section.text && <p>{section.text}</p>}

                        <div className="cs-single-content-gap"></div>
                      </div>
                    ))}
                    <div className="cs-card-wrap">
                      <div className="row cs-card-in">
                        {cards.map((card, index) => (
                          <div className="col-lg-6" key={index}>
                            <Card {...card} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="cs-single-content-gap"></div>
                    {quote && (
                      <div className="cs-quote-card-wrap">
                        <div className="cs-quote-in">
                          <i className="flaticon-quotation"></i>
                          <div className="cs-quote-text">
                            <p>{quote}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="cs-single-content-gap"></div>
                    <h6>{projectimg.title}</h6>
                    <p>{projectimg.description}</p>
                    <div className="cs-single-content-gap"></div>
                    <div className="cs-single-page-couple-img">
                      {projectimg && (
                        <>
                          {projectimg.images.map((img, index) => (
                            <img key={index} src={img} alt="LogiHub" />
                          ))}
                        </>
                      )}
                    </div>
                    <div className="cs-single-content-gap"></div>
                    <div className="cs-faq-wrap">
                      <Accordion items={faqItems} />
                    </div>
                    <div className="cs-section-height-half"></div>

                    <div className="cs-couple-btn-wrap">
                      <Link
                        to={`/case-study-details/${id - 1}`}
                        className="cs-text_b_line arrow-rotate-left"
                      >
                        <i className="flaticon-right-arrow"></i>
                        <span>Previous</span>
                      </Link>
                      <Link
                        to={`/case-study-details/${id + 1}`}
                        className="cs-text_b_line"
                      >
                        <span>Next</span>
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseDetailsPost;
