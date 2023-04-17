import React, { useRef, useState } from 'react';
import ProjectPad from './ProjectPad';
import AboutmeData from "../firebase/aboutme.json";
import ScrollContainer from "react-indiana-drag-scroll";

const About = () => {
    const [aboutmeData] = useState(AboutmeData.aboutme);
    const scrollRef = useRef(null);

    return(
        <div className="about">
            <ScrollContainer className="about-container">
                <section className="about-tiles" ref={scrollRef}>
                    {aboutmeData.map((aboutme) => {
                        return (
                            <div key={aboutme.id}>
                                <ProjectPad key={aboutme.id} content={aboutme} />
                                <div className="about-title text">{aboutme.name}</div>
                            </div>
                        )
                    })}
                </section>
            </ScrollContainer>
        </div>
    )
}

export default About;