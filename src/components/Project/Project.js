import React from "react";
import ProjectPass from "./ProjectPass";
import project from "../assests/project.json";
import { Link } from "react-router-dom";

const Project = () => {

  const threeProject = project.slice(0, 3);
  // console.log("Effect Blogs - ", threeProject);

  return (
    <div className="three-card-container">
    <div className="three-card-container-inner ">
      <h2 className="card-text-title pt-3 font-t">
        <i className="fas fa-pen-alt fa-lg"></i>Projects
      </h2>

      <div className="three-card-manage text-center mt-4">
        <div className="loaded-card mb-4">
          {threeProject.map((blog) => (
            <ProjectPass blog={blog} key={blog.id}></ProjectPass>
          ))}
        </div>
        <Link to="/project-collection" className="common-btn resume-btn">
        <i class="fas fa-globe-asia fa-lg"></i>See More
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Project;
