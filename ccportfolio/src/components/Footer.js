import React from 'react';
import TimesIcon from '../icon/times-circle-solid.svg';
import GamePadIcon from '../icon/gamepad-solid.svg';
import '../css/Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-inside">
                <div className="footer-left">
                    <img className="footer-gamepad icon" src={GamePadIcon} alt="footer-gamepad" />
                </div>
                <div className="footer-right">
                    <img className="footer-times icon2" src={TimesIcon} alt="footer-times" />
                    <div className="footer-text text">Select</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;