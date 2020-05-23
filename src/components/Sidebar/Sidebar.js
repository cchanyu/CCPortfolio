import React from "react";
import UserIcon from '../../svg/user-solid.svg'
import "./Sidebar.scss";

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <img className="sidebar__icon" src={UserIcon} alt="icon" />
                <div className="sidebar__item">Chanyu Choung</div>
            </div>
        </div>
    );
}

export default Sidebar;