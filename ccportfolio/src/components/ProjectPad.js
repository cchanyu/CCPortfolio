import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import "../css/Project.scss";

const ProjectPad = ({ content }) => {
    const [detail, setDetail] = useState(false);

    const handleClick = () => {
        setDetail(!detail);
    }

    return (
        <div>
            <img className="projectPad" src={content.image} alt="content" onClick={handleClick} />
            {detail ? <ProjectDetail toggle={handleClick} content={content} /> : null}
        </div>
    );
}

export default ProjectPad;
