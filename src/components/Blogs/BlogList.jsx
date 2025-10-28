import React from "react";
import BlogItem from "./BlogItem";
import blogData from "@/jsonData/blogData.json";

function BlogList() {
  return (
    <>
      <div className="cs-blog-section-wrapper blog-style-1">
        <div className="cs-blog-content-container">
          <div className="container">
            <div className="row cs-blog-items-container cs-item6-cal2">
              {blogData.map((blog) => (
                <div className="col-lg-6" key={blog.id}>
                  <BlogItem blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs-section-height"></div>
    </>
  );
}

export default BlogList;
