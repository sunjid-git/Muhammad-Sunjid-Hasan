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
      <div className="three-blog-container-inner ">
        <h2 className="blog-title pt-3 font-t">
          <i className="fas fa-pen-alt fa-lg"></i>Blog
        </h2>

        <div className="three-blog-manage text-center mt-4">
          <div className="loaded-blog mb-4">
            {threeBlog.map((blog) => (
              <BlogPass blog={blog} key={blog.id}></BlogPass>
            ))}
          </div>
          <Link to="/blog-collection" className="common-btn resume-btn">
            <i className="fas fa-book fa-lg"></i>More Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
