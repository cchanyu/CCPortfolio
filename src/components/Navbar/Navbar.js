import React from "react";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar__content">
                <NavLink className="navbar__content--button" to='/'>Home</NavLink>
                <NavLink className="navbar__content--button" to='/about'>About</NavLink>
                <NavLink className="navbar__content--button" to='/project'>Project</NavLink>
                <NavLink className="navbar__content--button" to='/contact'>Contact</NavLink>
            </div>
            <NavLink className="navbar__title" to='/'>Chanyu's Portfolio</NavLink>
        </div>
    );
}

export default withRouter(Navbar);