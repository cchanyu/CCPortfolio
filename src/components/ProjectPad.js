import React from 'react'
import "../css/ProjectPad.css"
import ProjectDetail from './ProjectDetail';

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
                <img className="projectPad" src={content.image} alt="image" onClick={handleClick} />
                {this.state.detail ? <ProjectDetail toggle={handleClick} content={content} /> : null}
            </div>
        )
    }
}

export default ProjectPad;