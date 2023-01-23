import React from 'react';
import '../css/Navbar.css'
import Wifi from '../icon/wifi-solid.svg';
import User from '../icon/user-solid.svg';
import Battery1 from '../icon/battery-full-solid.svg';
import Battery2 from '../icon/battery-three-qt-solid.svg';
import Battery3 from '../icon/battery-half-solid.svg';
import Battery4 from '../icon/battery-quarter-solid.svg';
import Battery5 from '../icon/battery-empty-solid.svg';

class Navbar extends React.Component {
    constructor(){
        super()
        this.state={
            status: ''
        }
    }

    componentDidMount(){
        this.changeBattery();
    }

    changeBattery = () => {
        const batteryState = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        this.setState({
          status: batteryState
        });
    }

    render(){
        const { status } = this.state;
        let icon = null;

        switch (status) {
            case 5:
                icon = <img className="battery icon" src={Battery1} alt="battery" />
                break;
        
            case 4:
                icon = <img className="battery icon" src={Battery2} alt="battery" />
                break;
        
            case 3:
                icon = <img className="battery icon" src={Battery3} alt="battery" />
                break;

            case 2:
                icon = <img className="battery icon" src={Battery4} alt="battery" />
                break;

            case 1:
                icon = <img className="battery icon" src={Battery5} alt="battery" />
                break;
        
            default:
                icon = <img className="battery icon" src={Battery1} alt="battery" />
                break;
        }

        return(
            <div className="navbar">
                <div className="navbar--inside">
                    <div className="navbar--inside--left">
                        <img className="icon user" src={User} alt="user" />
                        <div className="text mtxt">Hi, Guest</div>
                    </div>
                    <div className="navbar--inside--right">
                        <div className="clock">
                            {new Date().toLocaleString("en-US", {hour: '2-digit', hour12: true, minute: '2-digit', timeZone: "America/New_York"})}
                        </div>
                        <img className="wifi icon" src={Wifi} alt="wifi" />
                        {icon}
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar;