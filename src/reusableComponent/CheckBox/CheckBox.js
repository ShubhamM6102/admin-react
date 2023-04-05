import React from 'react';
import './checkbox-styles.scss';
// import { FiAirplay } from "react-icons/fi";

const CheckBox = (props) => {
  return (
<div>
  <input className="form-check-input" type="checkbox" id="{props.name}" value="" aria-label="..." />
</div>

  );
}

export default CheckBox;