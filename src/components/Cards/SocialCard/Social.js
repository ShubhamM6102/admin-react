import React from "react";
import "./social-style.scss";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Social = () => {
  return (
    <div class="card social">
      <div class="card-body">
        <h6 class="card-title">
          <strong>Social Source</strong>
        </h6>
        <div className="details">
          <div className="facebook">
            <FiFacebook />
          </div>
          <h5>
            Facebook <span>- 125 scales</span>
          </h5>
          <p>
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus tincidunt.
          </p>
          <p>
            <a class="link-opacity-10-hover" href="javascriptvoid0">
              Learn more
            </a>
          </p>
        </div>

        <div className="social-icon">
          <div className="details1">
            <div className="fb">
              <FiFacebook />
            </div>
            <h6>Facebook</h6>
            <p>125 sales</p>
          </div>

          <div className="details1">
            <div className="fb tw">
              <FiTwitter />
            </div>
            <h6>Facebook</h6>
            <p>125 sales</p>
          </div>

          <div className="details1">
            <div className="fb insta">
              <FiInstagram />
            </div>
            <h6>Facebook</h6>
            <p>125 sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
