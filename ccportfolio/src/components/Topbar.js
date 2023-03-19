import React from 'react';
import { NavLink } from 'react-router-dom';

import WifiIcon from '../icon/wifi-solid.svg';
import UserIcon from '../icon/user-solid.svg';
import Battery1 from '../icon/battery-full-solid.svg';
import Battery2 from '../icon/battery-three-qt-solid.svg';
import Battery3 from '../icon/battery-half-solid.svg';
import Battery4 from '../icon/battery-quarter-solid.svg';
import Battery5 from '../icon/battery-empty-solid.svg';
import '../css/Topbar.css';

class Topbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            status: ''
        }
    }

    componentDidMount(){ this.changeBattery(); }
    changeBattery = () => {
        const batteryState = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        this.setState({
          status: batteryState
        });
    }

    render(){
        const { status } = this.state;
        const isLogged = this.props.isLogged;
        const guestGreet = "Hi, Guest";
        const name = localStorage.getItem("name");
        const userGreet = "Hi, " + name;
        return(
            <div className="topbar">
                <div className="topbar-container">
                    <div className="topbar-left">
                        <NavLink className="topbar-navlink" to="/login">
                            <img className="topbar-icon topbar-user icon" src={UserIcon} alt="topbar-user" />
                        </NavLink>
                        <div className="topbar-text text">{ isLogged ? userGreet : guestGreet }</div>
                    </div>
                    <div className="topbar-right">
                        <div className="topbar-clock">
                            {new Date().toLocaleString("en-US", {hour: '2-digit', hour12: true, minute: '2-digit', timeZone: "America/New_York"})}
                        </div>
                        <img className="topbar-icon topbar-wifi icon" src={WifiIcon} alt="topbar-wifi" />
                        {{ 1 : <img className="topbar-icon battery icon" src={Battery1} alt="battery" />,
                           2 : <img className="topbar-icon battery icon" src={Battery2} alt="battery" />,
                           3 : <img className="topbar-icon battery icon" src={Battery3} alt="battery" />,
                           4 : <img className="topbar-icon battery icon" src={Battery4} alt="battery" />,
                           5 : <img className="topbar-icon battery icon" src={Battery5} alt="battery" />
                           }[status]}
                    </div>
                </div>
            </div>
        )
    }

}

export default Topbar;