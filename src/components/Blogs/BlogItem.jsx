import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, style }) => {
  const noClipimg = classNames("cs-blog-img", {
    "no-clip-img": style === "style2",
  });

  return (
    <div className="cs-blog-item">
      <div className="cs-blog-img-area">
        <div className={noClipimg}>
          <div className="cs-img-anim-wrap">
            <div className="cs-img-anim-img">
              <Link
                to={`/blog-details/${blog.id}`}
                className="cs-img-anim-img-in"
              >
                <img src={blog.image} alt="blog" />
                <img src={blog.image} alt="blog" />
              </Link>
            </div>
          </div>
        </div>
        <div className="cs-blog-meta">
          <div className="cs-blog-date">
            <p>{blog.date}</p>
          </div>
          <div className="cs-blog-author-meta">
            <p>By: {blog.author}</p>
          </div>
        </div>
      </div>
      <div className="cs-blog-content">
        <div className="cs-blog-title">
          <Link to={`/blog-details/${blog.id}`}>
            <h5>{blog.title}</h5>
          </Link>
        </div>
        <div className="cs-blog-excerpt-text">
          <p>{blog.excerpt}</p>
        </div>
        <div className="cs-blog-btn">
          <Link to={`/blog-details/${blog.id}`} className="cs-text_b_line">
            <span>Read More</span>
            <i className="flaticon-right-arrow"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
