import React from "react";
import { Link } from "react-router-dom";

const BlogContent = ({ content, images, tags }) => {
  return (
    <div>
      {content.map((section, index) => (
        <div key={index}>
          {section.heading && <h6>{section.heading}</h6>}
          {section.text && <p>{section.text}</p>}
          {section.quote && (
            <div className="cs-quote-card-wrap cs-quote-dark">
              <div className="cs-quote-in">
                <i className="flaticon-quotation"></i>
                <div className="cs-quote-text">
                  <p>“{section.quote}”</p>
                </div>
              </div>
            </div>
          )}
          <div className="cs-single-content-gap"></div>
        </div>
      ))}
      <div className="cs-single-page-couple-img">
        {images.map((image, index) => (
          <img key={index} src={image} alt="LogiHub" />
        ))}
      </div>
      <div className="cs-single-content-gap"></div>
      <div className="cs-border-blog-single"></div>
      <div className="cs-blog-tag-social">
        <div className="cs-blog-tag-single">
          <span className="cs-text-style-h6 cs-color-black">Tags:</span>
          <div className="cs-tag-items-wrap">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <Link to="#">{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cs-social-common cs-blog-share">
          <span className="cs-text-style-h6 cs-color-black">Share:</span>
          <ul>
            <li>
              <Link to="#">
                <i className="flaticon-facebook-app-symbol"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="flaticon-linkedin-big-logo"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="flaticon-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="flaticon-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="cs-section-height-half"></div>
    </div>
  );
};

export default BlogContent;
