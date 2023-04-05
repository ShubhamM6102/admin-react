// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Card from "react-bootstrap/Card";
import { FiAirplay } from "react-icons/fi";
import profile from "../../../assets/profile-img.png";
import avatar from "../../../assets/avatar-1.png";
import React from "react";
import "./profile.scss";

const Profile = (props) => {
  return (
    <div className="card profile">
      <div className="card-body">
        <div className="profile-bg">
          <div className="content">
            <h5 className="card-title">Welcome Back !</h5>
            <p>Skote Dashboard</p>
          </div>

          <img src={profile} className="profile-img" alt="profile" />
        </div>

        <div className="profile-details">
          <div className="profile-name">
            <img src={avatar} className="pic " alt="profile" />
            <strong>Henry Price</strong>
            <p className="light-gray">UI/UX Designer</p>
          </div>

          <div className="inf">
            <div className="inf-box">
              <div className="inf">
                <h6>125</h6>
                <p className="light-gray">Projects</p>
              </div>

              <div className="inf1 pt-2">
                <h6>$125</h6>
                <p className="light-gray">Revenue</p>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-sm">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
