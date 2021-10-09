import React from "react";
import "./BlogCollection.css";

import blog from "../assests/blog.json";

import { Link } from "react-router-dom";
import BlogThree from "./BlogPass";
import BlogPass from "./BlogPass";

const BlogCollection = () => {
  const restBlog = blog.slice(3, 9);
  // console.log('restBlog', restBlog);
  // console.log('length', restBlog.length);

  return (
    <div className="blog-main-container">
    <div className="blog-container">
      <p><i className="fas fa-marker fa-lg"></i>Blog </p>
      <div className="blog-inner-container text-center">
      <div className=" d-flex text-center my-4">
        {restBlog.map((blog) => (
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

export default BlogCollection;
