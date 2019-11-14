import React from "react";
import "./Projects.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="projectBody">
        <div className="project">
          <h3>Project Name:</h3>
          {/* <img>Preview IMG</img> */}
          <p>Brief Description</p>

          <a href="https://samuel-torres.now.sh/">
            <button>Portfolio</button>
          </a>
        </div>
        <div className="project">
          <h3>Project Name:</h3>
          {/* <img>Preview IMG</img> */}
          <p>Brief Description</p>
          <button>Link To Project</button>
        </div>
        <div className="project">
          <h3>Project Name:</h3>
          {/* <img>Preview IMG</img> */}
          <p>Brief Description</p>
          <button>Link To Project</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
