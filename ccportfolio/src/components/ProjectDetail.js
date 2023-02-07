import React from 'react'
import PropTypes from 'prop-types';
import TimesIcon from '../icon/times-circle-solid.svg';
import "../css/Project.css";

const ProjectDetail = (props) => {
    const { content, toggle } = props;
    const handleClick = () => { toggle() };
    const toURL = (props) => { window.open(props) }
    let URLCSS = (typeof content.url === 'string') ? "modal-url text" : "";
    
    return(
        <div className="bkmodal" onClick={handleClick}>
            <div className="modal" onClick={handleClick}>
                <div className="modal-title text">{content.name}</div>
                <img className="modal-image" src={content.image} alt="modal" />
                <div className={URLCSS} onClick={() => toURL(content.url)}>{content.url}</div>
                <div className="modal-desc text">{content.description}</div>
                <div className="modal-close">
                    <img className="model-times icon2" src={TimesIcon} alt="model-times" onClick={handleClick} />
                    <div className="model-text text">Close</div>
                </div>
            </div>
        </div>
    )
}

ProjectDetail.propTypes = {
    content: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
    })
}

export default ProjectDetail;