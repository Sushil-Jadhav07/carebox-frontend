import React, { useRef } from "react";
import classNames from "classnames";

import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import BlogComments from "./BlogComments";

import useStickyScroll from "@/hooks/useStickyScroll";

const BlogPost = ({ style, blogPost: blogData }) => {
  const container = useRef(null);
  const stickySectionRef = useRef(null);
  const scrollElementsRef = useRef(null);
  const stickyElementsRef = useRef(null);

  if (!blogData) {
    return <h1>Page Not Found</h1>;
  }

  if (style !== "style2") {
    useStickyScroll({
      container,
      stickySectionRef,
      scrollElementsRef,
      stickyElementsRef,
      blogData,
    });
  }

  const contentCenter = classNames("row for-bs", {
    cs_center: style === "style2",
  });

  return (
    <section ref={container}>
      <div className="cs-blog-single-page cs-page-single-wrap">
        <div className="cs-blog-single-page-in cs-page-single-wrap-in">
          <div className="container">
            <div
              className={contentCenter}
              id="StickySection"
              ref={stickySectionRef}
            >
              <div className="col-lg-8 row">
                <div id="scrollElements" ref={scrollElementsRef}>
                  <BlogHeader
                    title={blogData.title}
                    date={blogData.date}
                    author={blogData.author}
                    image={blogData.image}
                  />
                  <BlogContent
                    content={blogData.content}
                    images={blogData.images}
                    tags={blogData.tags}
                  />
                  <BlogComments comments={blogData.comments} />
                </div>
              </div>
              {style !== "style2" && (
                <div className="col-lg-4">
                  <div id="StickyElements" ref={stickyElementsRef}>
                    <BlogSidebar
                      categories={blogData.categories}
                      tags={blogData.tags}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
