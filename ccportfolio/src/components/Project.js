import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";
import '../css/Project.css';

const Project = ({ projectData }) => {
  const scrollRef = useRef(null);
  const clickHandler = () => {};

  useEffect(() => {
    const enableKeyboardCursorToScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.focus();
      }
    };

    const currentScrollRef = scrollRef.current; // Store the current value of scrollRef.current in a variable

    // Add event listener for focus
    currentScrollRef.addEventListener('focus', enableKeyboardCursorToScroll);

    // Clean up event listener when component is unmounted
    return () => {
      currentScrollRef.removeEventListener('focus', enableKeyboardCursorToScroll); // Use the variable in the cleanup function
    };
  }, []);

  return (
    <div className="project">
      <ScrollContainer className="project-container">
        <section
          className="project-tiles"
          ref={scrollRef}
        >
          {projectData.slice(0).reverse().map((project) => {
            return (
              <div key={project.id}>
                <ProjectPad
                  key={project.id}
                  content={project}
                  onClick={clickHandler}
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

Project.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Project;