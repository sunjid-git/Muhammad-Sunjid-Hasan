import React from "react";
import "./Project.css";
import ThreeProject from "./ThreeProject";

const Project = () => {
  return (
    <div className="project-main-container">
      <div className="project-container">
        <div className="project-container-text">
          <p>Projects</p>
          <p>
            Here are some of my works. If you find them interesting, you can
            also visit my project works.
          </p>
        </div>
        <div className="project-case">
          <ThreeProject />
        </div>
      </div>
    </div>
  );
};

export default Project;
