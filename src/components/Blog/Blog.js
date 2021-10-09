import React from "react";
import blog from "../assests/blog.json";
import { Link } from "react-router-dom";
import BlogThree from "./BlogThree";

const Blog = () => {
  
  const threeBlog = blog.slice(0, 3);
  // console.log("Effect Blogs - ", threeBlog);

  return (
    <div className="blog-main-container">
      <p>Blog</p>
      <div className="blog-container">
        {threeBlog.map((blog) => (
          <BlogThree blog={blog} key={blog.id}></BlogThree>
        ))}
      </div>
      <Link to="/blog-collection" className="common-btn resume-btn">
        More Blogs
      </Link>
    </div>
  );
};

export default Blog;
