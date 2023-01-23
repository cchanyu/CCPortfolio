import React from 'react';
import '../css/Footer.css'
import Times from '../icon/times-circle-solid.svg';
import GamePad from '../icon/gamepad-solid.svg';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer--inside">
                <div className="footer--inside--left">
                    <img className="gamepad icon" src={GamePad} alt="gamepad" />
                </div>
                <div className="footer--inside--right">
                    <img className="times icon2" src={Times} alt="times" />
                    <div className="text">Select</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;