import React from "react";
import { withRouter } from 'react-router';
import "./Navbar.scss";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar__title">Chanyu's Portfolio</div>
        </div>
    );
}

export default withRouter(Navbar);