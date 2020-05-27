import React from "react";
import { withRouter } from 'react-router';
import WinkIcon from '../../svg/wink-solid.svg';
import pageLocation from '../../util/pageLocation';
import "./Sidebar.scss";

const Sidebar = (props) => {
    const { location } = props;
    const tracklocation = pageLocation(location);

    return (
        <div className="sidebar" trackLocation={tracklocation}>
            <div className="sidebar__content">
                <img className="sidebar__icon" src={WinkIcon} alt="icon" />
                <div className="sidebar__container">
                    <div className="sidebar__item">{"Say 'hi' to Chanyu"}</div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Sidebar);