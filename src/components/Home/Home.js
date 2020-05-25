import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home__content">{"Welcome to Chanyu's Portfolio"}</div>
            <div className="home__highlight">{"< Programming x Designing >"}</div>
            <div className="home__content home__content--dim">{"A programmer with endless ambitions."}</div>
            <div className="home__group">
                <div className="home__content home__content--dim">{"I'll grind it until I achieve it.."}</div>
                <div className="home__content home__content--dim blink">{"|"}</div>
            </div>
            <NavLink className="home__button" to="/about">{"Learn more about me >"}</NavLink>
        </div>
    );
}

export default Home;