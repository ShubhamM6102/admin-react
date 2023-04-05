// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React from 'react';
import './card.scss';
// import { FiAirplay } from "react-icons/fi";

const MiniCard = (props) => {
  return (
<div className="card card-width border-0" >
  <div className="card-body miniCard-body">
    <div className='miniCard-details'>
    <p className="card-title">{props.name}</p>
    <h4 className="card-subtitle mb-2 text-body-secondary">{props.detail}</h4>
    </div>
    <div className='miniCard-icon mx-2'>
    <span className='icon-style'>{props.icon}</span>
    </div>
  </div>
</div>
  );
}

export default MiniCard;