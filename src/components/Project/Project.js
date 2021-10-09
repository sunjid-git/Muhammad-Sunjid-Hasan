import React from "react";
import "./Project.css";
import ThreeProject from "./ThreeProject";

const Project = () => {
  return (
    <div className="project-main-container">
      <div className="project-container">
        <div className="project-container-text">
          <p className="font-t"><i className="fas fa-tools fa-lg"></i>Project</p>
        </div>
        <div className="project-case">
          <ThreeProject />
        </div>
      </div>
    </div>
  );
};

export default Project;
