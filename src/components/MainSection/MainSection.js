import React from "react";
import "./mainSection.scss";
import Profile from "../Cards/Profile/Profile";
import Social from "../Cards/SocialCard/Social";
import MiniCard from "../../reusableComponent/Card/MiniCard";
import Stackedbarchart from "../StackedColumnChart/Stackedbarchart";
import RadialBarChart from "../RadialBarChart/RadialBarChart";
import Earning from "../Cards/MonthEarning/Earning";
import { FiAirplay,FiArrowDownCircle,FiBook,FiTag  } from "react-icons/fi";
import Sells from "../Cards/ProductSelling/Sells";
import Activity from "../Cards/Activity/Activity";
import SampleTables from "../Tables/SampleTable";
import Footer from "../Footer/Footer";

// import { MiCard } from "react-bootstrap";
const MainSection = () => {
  return (
    <div className="py-3 main-bg">
      <div className="d-flex mt-2">
        <h4>Dashboard</h4>
       <span className="page-tilte-right">
        <p>Dashboard</p>
        <span className="px-2">/</span>
        <p className="text-secondary ">dashboard</p>

       </span>
      </div>

      <div className="card-section">
        <div className="section-column">
         <Profile />
       <Earning />
        </div>

        <div className="section-minicard">
            <div className="card-row">
                <MiniCard  name="Orders" detail="1,234" icon={ <FiBook />}/>
                <MiniCard  name="Revenue"  detail="$13,233" icon={<FiArrowDownCircle />} />
                <MiniCard  name="Average Price"  detail="$16.2" icon={<FiTag  />} />
            </div>
            <Stackedbarchart />
        </div>
      </div>

     <div className="d-flex mt-3">
<Social  />
<Activity />
<Sells />
     </div>
<SampleTables />

<Footer />
    </div>
  );
};

export default MainSection;
