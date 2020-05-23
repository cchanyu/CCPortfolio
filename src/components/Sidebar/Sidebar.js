import React from "react";
import UserIcon from '../../svg/user-solid.svg'
import "./Sidebar.scss";

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div>
                <img src={UserIcon} alt="icon" />
                <div className="sidebar__item">About me</div>
            </div>
        </div>
    );
}

export default Sidebar;