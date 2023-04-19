import { useCallback } from "react";
import { TextField } from "@mui/material";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";
import EmployeeDemo from "../components/EmployeeDemo";
import EmployeeDemo2 from "../components/EmployeeDemo2";
import EmployeeDemo1 from "../components/EmployeeDemo1";
import "./EmployeesCEO.css";

const EmployeesCEO = () => {
  const navigate = useNavigate();

  const onMenuBurger21Click = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  return (
    <div className="employees-ceo">
      <FrameComponent6 />
      <img
        className="menu-burger-2-11"
        alt=""
        src="/menuburger-2-1@2x.png"
        onClick={onMenuBurger21Click}
      />
      <EmployeeDemo />
      <EmployeeDemo2 />
      <EmployeeDemo propLeft="1165px" propWidth="248px" propTop="96px" />
      <EmployeeDemo propLeft="577px" propWidth="248px" propTop="416px" />
      <div className="employee-demo">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <EmployeeDemo1 />
      <div className="employee-demo1">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <EmployeeDemo1 propLeft="1164px" />
      <div className="employee-demo2">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <img className="search-1-icon" alt="" src="/search-1@2x.png" />
          <TextField
            className="search-employees"
            sx={{ width: 296 }}
            color="primary"
            variant="standard"
            type="search"
            label="Search Employees"
            placeholder="Search employees"
            size="medium"
            margin="none"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeesCEO;
