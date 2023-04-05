// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Card from "react-bootstrap/Card";
import { FiArrowRight,FiArrowUp } from "react-icons/fi";

import React from "react";
import "./style.scss";
import RadialBarChart from "../../RadialBarChart/RadialBarChart";

const Earning = () => {
  return (
    <Card className="box-dimension">
      <Card.Body className="dimension-layout">
        <Card.Title className="title">Monthly Earning</Card.Title>
        <div className="earning-detailbox">
          <div className="income">
            <Card.Subtitle className="mb-2 text-muted">
              This month
            </Card.Subtitle>
            <h1>$34,252</h1>
            <Card.Text className="card-text"><span className="span">12% <FiArrowUp /></span>From previous period</Card.Text>
            <button type="button" class="btn btn-primary btn-sm view-more">
              view more <FiArrowRight className="view-icon" />
            </button>
          </div>
          <div className="radialBar-box">
            <RadialBarChart />
          </div>
        </div>
     {/* <p className="earning-content">We craft digital, graphic and the dimensional thinking.</p> */}
     <Card.Text className="me-2">
     We craft digital, graphic and dimensional thinking.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Earning;
