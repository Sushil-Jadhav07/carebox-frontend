import React, { useRef } from "react";
import BlogItem from "./BlogItem";
import BlogSidebar from "./BlogSidebar";
import useStickyScroll from "@/hooks/useStickyScroll";

const blogData = [
  {
    id: 1,
    title: "Efficient Transport is Key to Success",
    image: "/assets/img/blog/cs-blog-img-large-style-1.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "The Role of AI in Modern Logistics",
    image: "/assets/img/blog/cs-blog-img-large-style-2.jpg",
    date: "15 Sep 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "The Benefits of Real-Time Tracking",
    image: "/assets/img/blog/cs-blog-img-large-style-3.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Efficient Transport is Key to Success",
    image: "/assets/img/blog/cs-blog-img-large-style-1.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    title: "The Benefits of Real-Time Tracking in Logistics Operations",
    image: "/assets/img/blog/cs-blog-img-large-style-5.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    title: "Innovations in Last-Mile Delivery: What’s Next for the Industry?",
    image: "/assets/img/blog/cs-blog-img-large-style-6.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const categories = [
  "Supply Chain Management",
  "Transportation and Shipping",
  "Technology in Logistics",
  "Logistics Solutions",
  "Warehousing and Distribution",
  "Regulations and Compliance",
];

const tags = ["Sustainability", "GlobalTrade"];

const BlogStandardList = () => {
  const container = useRef(null);
  const stickySectionRef = useRef(null);
  const scrollElementsRef = useRef(null);
  const stickyElementsRef = useRef(null);

  useStickyScroll({
    container,
    stickySectionRef,
    scrollElementsRef,
    stickyElementsRef,
    blogData,
  });

  return (
    <section ref={container}>
      <div className="cs-blog-section-wrapper blog-style-1">
        <div className="cs-blog-content-container">
          <div className="container">
            <div
              id="StickySection"
              ref={stickySectionRef}
              className="row cs-blog-items-container"
            >
              <div className="col-lg-8">
                <div id="scrollElements" ref={scrollElementsRef}>
                  <div className="row for-blog-standard">
                    {blogData.map((blog) => (
                      <div className="col-lg-6 col-md-6" key={blog.id}>
                        <BlogItem blog={blog} style={"style2"} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div id="StickyElements" ref={stickyElementsRef}>
                  <BlogSidebar categories={categories} tags={tags} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStandardList;
