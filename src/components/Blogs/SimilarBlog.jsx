import React from "react";
import BlogItem from "./BlogItem";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const SimilarBlog = ({ similarBlogs }) => {
  return (
    <section>
      <div className="cs-blog-section-wrapper blog-style-1">
        <div className="cs-blog-content-container">
          <div className="container">
            <SectionTitle
              title={"Similar News May Help"}
              captext={"Similar News"}
              to="/blog"
              style={"style2"}
              rightLinkText="View More"
            />
          </div>

          <div className="cs-sec-title-height"></div>

          <div className="container">
            <div className="row cs-blog-items-container similar-post">
              {similarBlogs.map((blog) => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <BlogItem blog={blog} style={"style2"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarBlog;
