import React from "react";
import "./BlogPass.css";

import { Link } from "react-router-dom";

const BlogPass = (props) => {
  // console.log(props);
  const { blog, link } = props.blog;
  // console.log(blog);
  // console.log(link);
  return (
    <div className="card mx-2" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{blog}</h5>
        <Link
          to={{ pathname: `${link}` }}
          target="_blank"
          className="common-btn resume-btn"
        >
          Read
        </Link>
      </div>
    </div>
  );
};

export default BlogPass;
