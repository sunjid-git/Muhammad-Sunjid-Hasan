import React from "react";

import { Link } from "react-router-dom";

const ProjectPass = (props) => {
  // console.log(props);
  const { name, git,live, image } = props.blog;
  // console.log(blog);
  // console.log(link);
  return (
    <div className="card mx-4" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div>
        <Link
          to={{ pathname: `${git}` }}
          target="_blank"
          className="common-btn resume-btn my-2 "
        ><i class="fab fa-github fa-lg"></i>
          Git
        </Link>

        <Link
          to={{ pathname: `${live}` }}
          target="_blank"
          className="common-btn talk-btn my-2 "
        ><i class="fas fa-globe fa-lg"></i>
          Live
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPass;
