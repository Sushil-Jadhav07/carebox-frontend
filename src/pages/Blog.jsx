import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import BlogList from "@/components/Blogs/BlogList";

const Blog = () => {
  return (
    <>
      <BreadCrumb title={"Blog"} />
      <div className="cs-section-height"></div>
      <BlogList />
    </>
  );
};

export default Blog;
