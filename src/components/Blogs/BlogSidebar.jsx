import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = ({ categories, tags }) => {
  return (
    <div className="cs-single-widget-wrap">
      <div className="cs-widget-in">
        <div className="cs-widget-item">
          <div className="cs-search-widget">
            <div className="cs-search-content">
              <input type="text" placeholder="Search here..." />
              <div className="cs-icon-search">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-widget-item cs-widget-leftborder">
          <div className="cs-single-link">
            <div className="cs-widget-title">
              <i className="flaticon-menu"></i>
              <h6>Category</h6>
            </div>
            <div className="cs-link-list">
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="cs-text_b_line">
                    <Link to="#">
                      <span>{category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="cs-widget-item cs-widget-leftborder">
          <div className="cs-blog-tag">
            <div className="cs-widget-title">
              <i className="flaticon-menu"></i>
              <h6>Tags</h6>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
