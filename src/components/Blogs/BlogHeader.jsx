import React from "react";

const BlogHeader = ({ title, date, author, image }) => {
  return (
    <div className="cs-page-single-content-wrap">
      <div className="cs-page-content-in">
        <img src={image} alt="LogiHub" />
        <div className="cs-single-content-gap"></div>
        <div className="cs-single-blog-info">
          <p>{date}</p>
          <p>By: {author}</p>
        </div>
        <h4>{title}</h4>
        <p>
          In today's globalized market, selecting the right logistics partner is
          crucial to the success of your business...
        </p>
        <div className="cs-single-content-gap"></div>
      </div>
    </div>
  );
};

export default BlogHeader;
