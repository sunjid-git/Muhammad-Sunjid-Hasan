import React from "react";
import "./Blog.css";

import blog from "../assests/blog.json";
import { Link } from "react-router-dom";
import BlogPass from "./BlogPass";

const Blog = () => {
  const threeBlog = blog.slice(0, 3);
  // console.log("Effect Blogs - ", threeBlog);

  return (
    <div className="three-card-container">
      <div className="three-card-container-inner ">
        <h2 className="card-text-title pt-3 font-t">
          <i className="fas fa-pen-alt fa-lg"></i>Blogs
        </h2>

        <div className="three-card-manage text-center mt-4">
          <div className="loaded-card mb-4">
            {threeBlog.map((blog) => (
              <BlogPass blog={blog} key={blog.id}></BlogPass>
            ))}
          </div>
          <Link to="/blog-collection" className="common-btn resume-btn">
            <i className="fas fa-book fa-lg"></i>Read More{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
