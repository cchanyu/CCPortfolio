import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import WifiIcon from '../icon/wifi-solid.svg';
import UserIcon from '../icon/user-solid.svg';
import Battery1 from '../icon/battery-full-solid.svg';
import Battery2 from '../icon/battery-three-qt-solid.svg';
import Battery3 from '../icon/battery-half-solid.svg';
import Battery4 from '../icon/battery-quarter-solid.svg';
import Battery5 from '../icon/battery-empty-solid.svg';
import '../css/Topbar.css';

const Topbar = () => {
  const [status, setStatus] = useState('');
  const isLogged = JSON.parse(localStorage.getItem('isLogged'));
  const name = localStorage.getItem('name');

  useEffect(() => {
    changeBattery();
  }, []);

  const changeBattery = () => {
    const batteryState = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    setStatus(batteryState);
  }

  const guestGreet = 'Hi, Guest';
  const userGreet = `Hi, ${name || 'Guest'}`;
  const batteryIcons = [Battery1, Battery2, Battery3, Battery4, Battery5];

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <NavLink className="topbar-navlink" to="CCPortfolio/login">
            <img className="topbar-icon topbar-user icon" src={UserIcon} alt="topbar-user" />
          </NavLink>
          <div className="topbar-text text">{isLogged ? userGreet : guestGreet}</div>
        </div>
        <div className="topbar-right">
          <div className="topbar-clock">
            {new Date().toLocaleString("en-US", { hour: '2-digit', hour12: true, minute: '2-digit', timeZone: "America/New_York" })}
          </div>
          <img className="topbar-icon topbar-wifi icon" src={WifiIcon} alt="topbar-wifi" />
          <img className="topbar-icon battery icon" src={batteryIcons[status - 1]} alt="battery" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
