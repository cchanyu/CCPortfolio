import React from 'react'
import ProjectDetail from './ProjectDetail';
import "../css/Project.css";

class ProjectPad extends React.Component {
    constructor(){
        super()
        this.state={
            detail: false
        }
    }

    handleClick = () => { this.setState({detail: !this.state.detail}) }

    render(){
        const { content } = this.props;
        const { handleClick } = this;

        return(
            <div>
                <img className="projectPad" src={content.image} alt="content" onClick={handleClick} />
                {this.state.detail ? <ProjectDetail toggle={handleClick} content={content} /> : null}
            </div>
        )
    }
}

export default ProjectPad;