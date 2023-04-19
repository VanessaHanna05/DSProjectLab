import { useMemo } from "react";
import "./EmployeeDemo.css";

const EmployeeDemo = ({ propLeft, propWidth, propTop }) => {
  const employeeDemoStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      top: propTop,
    };
  }, [propLeft, propWidth, propTop]);

  return (
    <div className="employee-demo3" style={employeeDemoStyle}>
      <img className="employee-demo-child1" alt="" src="/ellipse-2.svg" />
      <img className="image-7-icon3" alt="" src="/image-7@2x.png" />
      <div className="name-lastname3">Name LastName</div>
      <div className="position3">Position</div>
      <div className="streak-of-projects3">Streak of Projects</div>
      <div className="email-address3">Email Address</div>
      <div className="phone-number3">Phone Number</div>
      <img className="image-8-icon3" alt="" src="/image-8@2x.png" />
      <img className="image-9-icon3" alt="" src="/image-9@2x.png" />
      <img className="image-10-icon3" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon3" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon3" alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default EmployeeDemo;
