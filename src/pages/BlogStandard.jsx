import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import BlogStandardList from "@/components/Blogs/BlogStandardList";

const BlogStandard = () => {
  return (
    <>
      <BreadCrumb title={"Recent Blog "} />
      <div className="cs-section-height"></div>
      <BlogStandardList />
      <div className="cs-section-height"></div>
    </>
  );
};

export default BlogStandard;
