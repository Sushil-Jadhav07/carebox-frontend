import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import BlogItem from "./BlogItem";

import blogData from "@/jsonData/blogData";

const RecentNews = () => {
  const recentBlogs = blogData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <div className="cs-section-height"></div>
      <section>
        <div className="cs-blog-section-wrapper blog-style-1">
          <div className="cs-blog-content-container">
            <div className="container">
              <SectionTitle
                title={"News May Help You"}
                captext={"Recent News"}
                to="/blog"
                style={"style2"}
                rightLinkText="View More"
              />
            </div>

            <div className="cs-sec-title-height"></div>

            <div className="container">
              <div className="row cs-blog-items-container similar-post">
                {recentBlogs.map((blog) => (
                  <div className="col-lg-4 col-md-6" key={blog.id}>
                    <BlogItem blog={blog} style={"style2"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentNews;
