import React from "react";

import "./BlogCollection.css";
import blog from "../assests/blog.json";

import BlogPass from "./BlogPass";

const BlogCollection = () => {
  
  const restBlog = blog.slice(3, 9);
  // console.log('restBlog', restBlog);
  // console.log('length', restBlog.length);

  return (
    <div className="three-blog-container-inner">
      <h2 className="blog-title pt-5 font-t">
        <i className="fas fa-pen-alt fa-lg"></i>Blog
      </h2>

      <div className="three-blog-manage text-center mt-4">
        <div className="loaded-blog mb-4 pt-2">
          {restBlog.map((blog) => (
            <BlogPass blog={blog} key={blog.id}></BlogPass>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCollection;
