import React, { useEffect, useState } from "react";
import blog from "../assests/blog.json";
const Blog = () => {
  const threeBlog = blog.slice(0, 3);
  const [blogs, setBlogs] = useState(threeBlog);
  useEffect(() => {
    setBlogs(blogs);
  }, []);
  // console.log("Effect Blogs - ",blogs);

  return (
    <div className="blog-main-container">
      Blog : {blogs.length}
      <div className="blog-container">
      {
          blogs.map(blog=> <li>{blog.blogName}</li>)
      }
      </div>
    </div>
  );
};

export default Blog;
