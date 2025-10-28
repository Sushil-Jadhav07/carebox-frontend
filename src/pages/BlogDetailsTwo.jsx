import React from "react";
import { useParams } from "react-router-dom";

import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import BlogPost from "@/components/Blogs/BlogPost";
import SimilarBlog from "@/components/Blogs/SimilarBlog";

import blogPosts from "@/jsonData/blogPosts.json";
import blogData from "@/jsonData/blogData.json";

import useBlogData from "@/hooks/useBlogData";

const BlogDetailsTwo = () => {
  let { blogId } = useParams();

  const { currentBlog, similarBlogs } = useBlogData(
    blogId,
    blogPosts,
    blogData
  );

  if (!currentBlog) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BreadCrumb title={"Blog Single"} />
      <div className="cs-section-height"></div>
      <BlogPost style="style2" blogPost={currentBlog} />
      <div className="cs-section-height"></div>
      <SimilarBlog similarBlogs={similarBlogs} />
      <div className="cs-section-height"></div>
    </>
  );
};

export default BlogDetailsTwo;
