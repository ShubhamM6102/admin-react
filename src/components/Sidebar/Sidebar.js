import React, { useState } from "react";
import "./index.scss";
// import { Link } from 'react-router-dom';
import Sidenav from "../Sidenav/Sidenav";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
// import logo from '../../assets/cnx-logo-white.png';
import Dropdown from "../../reusableComponent/Dropdown/Dropdown";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className=" header-align">
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <i
              className={`fas fa-bars ${show ? "fa-solid fa-bars" : null}`}
            ></i>
          </div>
          <div class="searchbar">
            <div class="row   justify-content-center align-items-center">
              <div class="col">
                <div class="form">
                  <span>
                    <i class="fa fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control form-input"
                    placeholder="Search anything..."
                  />
                </div>
              </div>
            </div>
          </div> 
          <Dropdown name="Mega Menu"/>
        </div>
        <div className="header-justify">
        <Header  />
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <Sidenav click={show} />
      </aside>

      <MainSection />
    </main>
  );
};

export default Sidebar;
