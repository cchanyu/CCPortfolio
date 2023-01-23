import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";
import '../css/About.css';

const About = ({ aboutmeData }) => {
    const scrollRef = createRef();
    const clickHandler = () => {};
    const enableKeyboardCursorToScroll = () => {
        if (this.scrollRef.current) {
            this.scrollRef.current.focus();
        }
    };

    return(
        <div className="about">
            <ScrollContainer className="about-container">
                <section
                    className="about-tiles"
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
                                <div className="about-title text">{aboutme.name}</div>
                            </div>
                        )
                    })}
                </section>
            </ScrollContainer>
        </div>
    )
}

About.propTypes = {
    aboutmeData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default About;