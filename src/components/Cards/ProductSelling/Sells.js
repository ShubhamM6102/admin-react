import React from "react";
import "./sell-styles.scss";
import pin from "../../../assets/map-pin.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Sells = () => {
  return (
    <div class="card sells">
      <div class="card-body">
        <h6 class="card-title">
          <strong>Top Cities Selling Product</strong>
        </h6>
        <div className="details">
          <img src={pin} className="pin" alt="pin" />

          <h5>1,456</h5>
          <p>San Francisco</p>
        </div>

        <div className="detail-box">
          <p>San Francisco</p>
          <h6>1,456</h6>
          <ProgressBar variant="info" className="blueBar" now={100} />
        </div>

        <div className="detail-box">
          <p>Los Angeles</p>
          <h6>1,456</h6>
          <ProgressBar variant="success" className="successBar" now={100} />
        </div>

        <div className="detail-box">
          <p>San Diego</p>
          <h6>1,456</h6>
          <ProgressBar variant="warning" className="warningBar" now={100} />
        </div>
      </div>
    </div>
  );
};

export default Sells;
