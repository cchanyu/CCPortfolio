import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";
import '../css/Projects.css'

const Projects = ({ projectData }) => {
    const scrollRef = createRef();
    const clickHandler = () => {};
    const enableKeyboardCursorToScroll = () => {
        if (this.scrollRef.current) {
            this.scrollRef.current.focus();
        }
    };

    return(
        <div className="project">
            <ScrollContainer className="container">
                <section
                    className="tiles"
                    onFocus={enableKeyboardCursorToScroll}
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
                                <div className="data--title text">{project.name} - {project.language}</div>
                            </div>
                        )
                    })}
                </section>
            </ScrollContainer>
        </div>
    )
}

Projects.propTypes = {
    projectData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Projects;