import React from "react";
import PropTypes from 'prop-types';
import emptyURL from '../../util/emptyURL';
import "./ProjectList.scss";

const ProjectList = ({projectData}) => projectData.map((project) => {

    return (
        <div className="projectList" key={project.id}>
            <div className="projectList__content">
                <div className="projectList__item--name">{project.name}</div>
                <div className="projectList__item--date">{project.date}</div>
            </div>
            <div className="projectList__container">
                <div className="projectList__item--desc">{project.description}</div>
                <div className="projectList__item--lang">{project.language}</div>
            </div>
        </div>
    );
});

ProjectList.propTypes = {
    projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList;