import React from "react";
import "./Blog.css";

import blog from "../assests/blog.json";
import { Link } from "react-router-dom";
import BlogPass from "./BlogPass";

const Blog = () => {
  const threeBlog = blog.slice(0, 3);
  // console.log("Effect Blogs - ", threeBlog);

  return (
    <div className="three-blog-container">
      <div className="three-blog-container-inner text-center">
      
        <p className="blog-title p-2">
          <i className="fas fa-pen-alt fa-lg"></i>Blog
        </p>

        <div className="loaded-blog">
          {threeBlog.map((blog) => (
            <BlogPass blog={blog} key={blog.id}></BlogPass>
          ))}
        </div>
        <Link to="/blog-collection" className="common-btn resume-btn">
          <i className="fas fa-book fa-lg"></i>More Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blog;
