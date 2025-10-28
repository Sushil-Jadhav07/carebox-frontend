import { useState, useEffect } from "react";

const useBlogData = (blogId, blogPosts,
    blogData) => {

    const [currentBlog, setCurrentBlog] = useState(null);

    const [similarBlogs, setSimilarBlogs] = useState([]);

    useEffect(() => {
        const current = blogPosts.find((post) => post.blogId === parseInt(blogId));
        setCurrentBlog(current);

        if (current) {
            const similar = blogData
                .filter((post) => {
                    if (post.blogId === parseInt(blogId)) return false;

                    const currentTitleWords = current.title.toLowerCase().split(" ");
                    const postTitleWords = post.title.toLowerCase().split(" ");

                    const matchingWords = currentTitleWords.filter((word) =>
                        postTitleWords.includes(word)
                    );

                    return matchingWords.length > 0;
                })
                .slice(0, 3);

            setSimilarBlogs(similar);
        }
    }, [blogId]);

    return { currentBlog, similarBlogs };
};

export default useBlogData;