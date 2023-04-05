import React from "react";
import "./activity-styles.scss";
import pin from "../../../assets/map-pin.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiArrowRight, FiArrowRightCircle } from "react-icons/fi";

const Activity = () => {
  return (
    <div class="card activity">
      <div class="card-body">
        <h6 class="card-title">
          <strong>Activity</strong>
        </h6>

        <div className="box">
          <div className="detail">
            <span className="rounded-arrow">
              <FiArrowRightCircle />
            </span>
            <div className="details">
              <div className="date">
                <h5>
                  25 Nov
                  <i>
                    <FiArrowRight />
                  </i>
                </h5>
              </div>
              <div className="content">
                <p>Responded to need “Volunteer Activities</p>
              </div>
            </div>
          </div>

          <div className="detail">
            <span className="rounded-arrow">
              <FiArrowRightCircle />
            </span>
            <div className="details">
              <div className="date">
                <h5>
                  17 Nov
                  <i>
                    <FiArrowRight />
                  </i>
                </h5>
              </div>
              <div className="content">
                <p>Everyone realizes why a new common language would be desirable...</p>
              </div>
            </div>
          </div>

          <div className="detail">
            <span className="rounded-arrow">
              <FiArrowRightCircle />
            </span>
            <div className="details">
              <div className="date">
                <h5>
                  15 Nov
                  <i>
                    <FiArrowRight />
                  </i>
                </h5>
              </div>
              <div className="content">
                <p>Joined the group “Boardsmanship Forum”</p>
              </div>
            </div>
          </div>

          <div className="detail">
            <span className="rounded-arrow">
              <FiArrowRightCircle />
            </span>
            <div className="details">
              <div className="date">
                <h5>
                  12 Nov
                  <i>
                    <FiArrowRight />
                  </i>
                </h5>
              </div>
              <div className="content">
                <p>Responded to need “Volunteer Activities</p>
              </div>
            </div>
          </div>

        </div>

        <div className="view-more">
        <button type="button" class="btn btn-primary btn-sm view-more">
              view more <FiArrowRight className="view-icon" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
