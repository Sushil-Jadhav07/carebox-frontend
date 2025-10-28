import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, EffectFade, Autoplay } from "swiper/modules";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    title: "Efficient Transport is Key to Success",
    image: "/assets/img/blog/cs-blog-img-large-style-1.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/blog-details",
  },
  {
    id: 2,
    title: "The Role of AI in Modern Logistics",
    image: "/assets/img/blog/cs-blog-img-large-style-2.jpg",
    date: "15 Sep 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/blog-details",
  },
  {
    id: 3,
    title: "The Benefits of Real-Time Tracking",
    image: "/assets/img/blog/cs-blog-img-large-style-3.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/blog-details",
  },
  {
    id: 4,
    title: "Efficient Transport is Key to Success",
    image: "/assets/img/blog/cs-blog-img-large-style-4.jpg",
    date: "18 Aug 2024",
    author: "Admin",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/blog-details",
  },
];

const BlogsHomeContent = () => {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-blog-section-wrapper blog-style-1">
        <div className="cs-blog-content-container">
          <div className="container">
            <SectionTitle
              captext={"Recent Blog"}
              title={"News May Help You"}
              to={"/blog"}
              rightLinkText="View More"
              style="style2"
            />
          </div>

          <div className="cs-sec-title-height"></div>

          <div className="container">
            <div className="row cs-blog-items-container">
              <div className="swiper home1-blog-slider">
                <Swiper
                  modules={[Navigation, Scrollbar, EffectFade, Autoplay]}
                  loop
                  slidesPerView="auto"
                  spaceBetween="55"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {blogData.map((blog) => (
                    <SwiperSlide key={blog.id}>
                      <BlogItem blog={blog} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHomeContent;
