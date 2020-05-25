import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <div className="about__order">
                <div className="about__header">{"< About Me >"}</div>
                
                <div className="about__item">{"Hello, my name is "}<span className="about__item--color">{"Chanyu Choung"}</span>{"."}</div>
                
                <div className="about__item">{"I'm from "}<span className="about__item--color">{"South Korea "}</span>{"and an international student at "}
                <span className="about__item--color">{"Lehman College"}</span>{"."}</div>
                
                <div className="about__item about__margin">{"I'm currently double majoring in "}<span className="about__item--color">{"Computer Science "}</span>
                {"and "}<span className="about__item--color">{"Computer Graphics and Imaging "}</span>{"and I expect to graduate in Spring of 2023."}</div>
                
                <div className="about__item">{"I got into Computer Science, because of "}<span className="about__item--color">{"online video games"}</span>
                {", but the games that I "}<span className="about__item--color">{"love "}</span>{"doesn't last forever. "}
                {"If an online video game lose their support, they have no option but to shut it down and I get a huge disappointment when it happens."}</div>
                
                <div className="about__item about__margin">{"So it is my dream to recreate some of my favorite games that I played in my childhood "}
                {"and make it better than what it used to be. I can make "}<span className="about__item--color">{"improvements "}</span>
                {"on features that I didn't prefer and add new functions that works better."}</div>
                
                <div className="about__item">{"This journey won't be easy, but "}<span className="about__item--color">{"dreaming "}</span>
                {"is what makes me so "}<span className="about__item--color">{"ambitious "}</span>
                {"that it drives me forward to learn new things and get excited of the future."}</div>
            </div>
        </div>
    );
}

export default About;