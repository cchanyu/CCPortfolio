import React from "react";
import WinkIcon from '../../svg/wink-solid.svg'
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <img className="sidebar__icon" src={WinkIcon} alt="icon" />
                <div className="sidebar__container">
                    <div className="sidebar__item">{"Say 'hi' to Chanyu"}</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;