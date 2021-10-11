import React from "react";

import project from "../assests/project.json";
import ProjectPass from "./ProjectPass";

const ProjectCollection = () => {
  
  const restProject = project.slice(3, 11);
  // console.log('restProject', restProject);
  // console.log('length', restProject.length);

  return (
    <div className="three-card-container-inner">
      <h1 className="card-text-title pt-5 font-t">
        <i className="fas fa-pen-alt fa-lg"></i>Project
      </h1>

      <div className="three-card-manage text-center mt-4">
        <div className="loaded-card mb-4 pt-2">
          {restProject.map((blog) => (
            <ProjectPass blog={blog} key={blog.id}></ProjectPass>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCollection;
