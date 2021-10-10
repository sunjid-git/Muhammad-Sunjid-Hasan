import React from "react";
import './ProjectPass.css';

import { Link } from "react-router-dom";

const ProjectPass = (props) => {
  // console.log(props);
  const { name, git,live, imgURL } = props.blog;
  // console.log(name);
  // console.log(git);
  // console.log(live);
  // console.log(image);
  return (
    <div className="card mx-4" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title project-title-bold">{name}</h5>
        <img src={imgURL} alt="Project Image"/>
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
