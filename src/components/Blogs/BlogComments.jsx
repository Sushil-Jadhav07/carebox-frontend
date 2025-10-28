import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const BlogComments = ({ comments }) => {
  return (
    <div className="cs-comment-container">
      <div className="cs-comment-content-in">
        <div className="cs-comment-title">
          <h5>Comment</h5>
          <div className="cs-height-50"></div>
          <div className="cs-commented-content">
            {comments.map((comment) => (
              <>
                <div
                  key={comment.id}
                  className={`cs-comment-item  ${
                    comment.userType === "user" ? "comment-reply" : ""
                  }`}
                >
                  <div className="cs-comment-user-info">
                    <img src={comment.avatar} alt="LogiHub" />
                    <div className="blog-user-content">
                      <span className="cs-text-style-h6 cs-color-black">
                        {comment.name}
                      </span>
                      <p>{comment.time}</p>
                    </div>
                  </div>
                  <div className="cs-height-20"></div>
                  <div className="cs-comment-text">
                    <p className="mb-0">{comment.text}</p>
                  </div>
                  <div className="cs-height-20"></div>
                  <div className="cs-reply-btn">
                    <Link to="#" className="cs-text_b_line">
                      <span>Reply</span>
                      <i className="flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
                {comment.userType === "admin" && (
                  <div className="cs-height-50"></div>
                )}
              </>
            ))}
          </div>
          <div className="cs-section-height-half"></div>
          <div className="cs-form-cp-in cs-form-light cs-comment-form">
            <h5>Leave a Comment</h5>
            <div className="cs-height-50"></div>
            <form>
              <div className="cs_center mb-3 input-row-2col">
                <div className="mb-3 input-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name*"
                    required
                  />
                </div>
                <div className="mb-3 input-item">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address*"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your comment..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="cs-primary-btn">
                Post Comment<i className="flaticon-right-arrow"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComments;
