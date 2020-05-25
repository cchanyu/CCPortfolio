import React from "react";
import UserIcon from '../../svg/user-solid.svg'
import WinkIcon from '../../svg/wink-solid.svg'
import "./Sidebar.scss";

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <img className="sidebar__icon" src={UserIcon} alt="icon" />
                <div className="sidebar__container">
                    <div className="sidebar__item">This is Chanyu.</div>
                    <img className="sidebar__icon--tiny" src={WinkIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;