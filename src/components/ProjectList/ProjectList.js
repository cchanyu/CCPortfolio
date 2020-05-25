import React from "react";
import PropTypes from 'prop-types';
import "./ProjectList.scss";

const emptyURL = (props) => {
    if(props.image === ""){
        return false;
    }
    return true;
}

const ProjectList = ({projectData}) => projectData.map((project) => {

    return (
        <div className="projectList" key={project.id}>
            <div className="projectList__item">{project.name}</div>
            <div className="projectList__item">{project.description}</div>
            {emptyURL(project) ? (<img className="projectList__image" src={project.image} alt="image" />) : null}
        </div>
    );
});

ProjectList.propTypes = {
    projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList;