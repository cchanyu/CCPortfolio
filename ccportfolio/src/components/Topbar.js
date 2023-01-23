import React from 'react';
import WifiIcon from '../icon/wifi-solid.svg';
import UserIcon from '../icon/user-solid.svg';
import Battery1 from '../icon/battery-full-solid.svg';
import Battery2 from '../icon/battery-three-qt-solid.svg';
import Battery3 from '../icon/battery-half-solid.svg';
import Battery4 from '../icon/battery-quarter-solid.svg';
import Battery5 from '../icon/battery-empty-solid.svg';
import '../css/Topbar.css';

class Topbar extends React.Component {
    constructor(){
        super()
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
        let icon = null;

        /* find an efficient way to do this */
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
            <div className="topbar">
                <div className="topbar-container">
                    <div className="topbar-left">
                        <img className="topbar-user icon" src={UserIcon} alt="topbar-user" />
                        <div className="topbar-text text">Hi, Guest</div>
                    </div>
                    <div className="topbar-right">
                        <div className="topbar-clock">
                            {new Date().toLocaleString("en-US", {hour: '2-digit', hour12: true, minute: '2-digit', timeZone: "America/New_York"})}
                        </div>
                        <img className="topbar-wifi icon" src={WifiIcon} alt="topbar-wifi" />
                        {icon}
                    </div>
                </div>
            </div>
        )
    }

}

export default Topbar;