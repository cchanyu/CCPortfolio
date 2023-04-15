import React, { useRef, useState } from 'react';
import ProjectPad from './ProjectPad';
import ProjectData from "../server/projects.json";
import ScrollContainer from "react-indiana-drag-scroll";
import '../css/Project.css';

const Project = () => {
  const scrollRef = useRef(null);
  const [ projectData ] = useState(ProjectData.projects);

  return (
    <div className="project">
      <ScrollContainer className="project-container">
        <section
          className="project-tiles"
          ref={scrollRef}>
          {projectData.slice(0).reverse().map((project) => {
            return (
              <div key={project.id}>
                <ProjectPad
                  key={project.id}
                  content={project}
                />
                <div className="project-title text">{project.name} - {project.language}</div>
              </div>
            )
          })}
        </section>
      </ScrollContainer>
    </div>
  )
}

export default Project;
