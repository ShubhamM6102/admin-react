import React from "react";
import "./sidenav.scss";
// import { Link } from "react-router-dom";
import {
  FiHome,
  FiLayout,
  FiLayers,
  FiCalendar,
  FiSettings,
  FiMessageSquare,
  FiMapPin,
  FiFileText,
  FiMail,
  FiAperture,
  FiBarChart2,FiColumns
} from "react-icons/fi";
import logo from "../../assets/cnx-logo-white.png";

const Sidenav = (props) => {
  return (
    <div className="nav1">
      <img
        src={logo}
        className={props.click ? "App-logo" : "hide"}
        alt="logo"
      />

      <div className={props.click ? "show-heading" : "hide-heading"}>
        <h6 className="ms-4 mt-3">MENU</h6>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">

        {/* ----------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <FiHome className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Dashboard
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <FiLayout className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Layouts
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <FiLayers className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Templates
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------- */}

      <div className={props.click ? "show-heading" : "hide-heading"}>
        <h6 className="ms-4 mt-3">APPS</h6>
      </div>

      {/* ------------------------------------------------------------------------------------- */}

      <div className="accordion accordion-flush" id="accordionFlushExample1">

        {/* --------------------------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingfour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefour"
              aria-expanded="false"
              aria-controls="flush-collapsefour"
            >
              <FiCalendar className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Calendars
              </span>
            </button>
          </h2>
          <div
            id="flush-collapsefour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingfour"
            data-bs-parent="#accordionFlushExample1"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingfive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefive"
              aria-expanded="false"
              aria-controls="flush-collapsefive"
            >
              <FiMessageSquare className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Chat
              </span>
            </button>
          </h2>
          <div
            id="flush-collapsefive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingfive"
            data-bs-parent="#accordionFlushExample1"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingsix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsesix"
              aria-expanded="false"
              aria-controls="flush-collapsesix"
            >
              <FiFileText className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                File Manager
              </span>
            </button>
          </h2>
          <div
            id="flush-collapsesix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingsix"
            data-bs-parent="#accordionFlushExample1"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTOne"
              aria-expanded="false"
              aria-controls="flush-collapseTOne"
            >
              <FiMail className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Email
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTOne"
            data-bs-parent="#accordionFlushExample1"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTTwo"
            >
              <FiMapPin className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Maps
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTTwo"
            data-bs-parent="#accordionFlushExample1"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTThree"
              aria-expanded="false"
              aria-controls="flush-collapseTThree"
            >
              <FiSettings className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Settings
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTThree"
            data-bs-parent="#accordionFlushExample1"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

{/* ---------------------------------------------------------------------------- */}

      <div className={props.click ? "show-heading" : "hide-heading"}>
        <h6 className="ms-4 mt-3">COMPONENTS</h6>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample3">

        {/* ----------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne3"
              aria-expanded="false"
              aria-controls="flush-collapseOne3"
            >
              <FiBarChart2 className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Charts
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne3"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne3"
            data-bs-parent="#accordionFlushExample3"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>


 {/* -------------------------------------------------------------------------- */}

 <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree3"
              aria-expanded="false"
              aria-controls="flush-collapseThree3"
            >
              <FiColumns className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Tables
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree3"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree3"
            data-bs-parent="#accordionFlushExample3"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* --------------------------------------------------------------------- */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo3"
              aria-expanded="false"
              aria-controls="flush-collapseTwo3"
            >
              <FiAperture className="icon" />
              <span className={props.click ? "show-text" : "hide-text"}>
                Icons
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo3"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo3"
            data-bs-parent="#accordionFlushExample3"
          >
            <div className="accordion-body">
              <ul>
                <li>Buttons</li>
                <li>Card</li>
                <li>Accordion</li>
                <li>Carousel</li>
                <li>Dropdown</li>
                <li>Progess Bar</li>
                <li>Tabs</li>
              </ul>
            </div>
          </div>
        </div>

       
      </div>

    </div>
  );
};

export default Sidenav;
