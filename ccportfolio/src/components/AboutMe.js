import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";
import '../css/AboutMe.css'

const AboutMe = ({ aboutmeData }) => {
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
                    {aboutmeData.map((aboutme) => {
                        return (
                            <div key={aboutme.id}>
                                <ProjectPad
                                    key={aboutme.id}
                                    content={aboutme}
                                    onClick={clickHandler}
                                />
                                <div className="data--title text">{aboutme.name}</div>
                            </div>
                        )
                    })}
                </section>
            </ScrollContainer>
        </div>
    )
}

AboutMe.propTypes = {
    aboutmeData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AboutMe;