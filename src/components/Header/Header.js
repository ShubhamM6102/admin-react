// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React from 'react';
import './header-style.scss';
import flag from "../../assets/flag.png";
import avatar from "../../assets/avatar-1.png";
import { FiBell,FiGrid,FiMaximize,FiSettings } from "react-icons/fi";
import Dropdown from "../../reusableComponent/Dropdown/Dropdown";
const Header = () => {
  return (
<div className="right-nav" >
<img
        src={flag}
        className="flag"
        alt="flag"
      />

      <span><FiMaximize  className='nav-icon'/></span>

      <span><FiGrid className='nav-icon' /></span>

      <span><FiBell className='nav-icon' /></span>

<img
        src={avatar}
        className="rounded-circle avatar"
        alt="avatar"
      />

      <Dropdown name="Henry"/>
  
  <span><FiSettings className='nav-icon' /></span>
</div>
  );
}

export default Header;