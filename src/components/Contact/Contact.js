import React from "react";
import "./Contact.scss";

const toURL = (props) => {
    window.open(props);
}

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__order">
                <div className="contact__header">{"< Contact Information >"}</div>
                <div className="contact__item">{"Name: Chanyu Choung"}</div>
                <div className="contact__item">{"Email: Chanyuabc@gmail.com"}</div>
                <div className="contact__group">
                    <div className="contact__item">{"Linkedin:"}&nbsp;</div>
                    <div className="contact__link" onClick={() => toURL("https://www.linkedin.com/in/chanyu-c/")}>{"https://www.linkedin.com/in/chanyu-c/"}</div>
                </div>
                <div className="contact__group">
                    <div className="contact__item">{"Github:"}&nbsp;</div>
                    <div className="contact__link" onClick={() => toURL("https://github.com/cchanyu")}>{"https://github.com/cchanyu"}</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;