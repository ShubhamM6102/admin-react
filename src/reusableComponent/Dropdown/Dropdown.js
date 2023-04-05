import React from 'react';
import './dropdown-styles.scss';
// import { FiAirplay } from "react-icons/fi";

const Dropdown = (props) => {
  return (
<div className="btn-group">
  <button className="btn  btn-sm dropdown-toggle color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   {props.name}
  </button>
  <ul className="dropdown-menu">
  <li><a class="dropdown-item" href="javascriptvoid0">Profile</a></li>
    <li><a class="dropdown-item" href="javascriptvoid0">Gallery</a></li>
    <li><a class="dropdown-item" href="javascriptvoid0">LogOut</a></li>
  </ul>
</div>

  );
}

export default Dropdown;