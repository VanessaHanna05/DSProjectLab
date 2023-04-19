import { useMemo } from "react";
import "./EmployeeDemo1.css";

const EmployeeDemo1 = ({ propLeft }) => {
  const employeeDemo1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="employee-demo5" style={employeeDemo1Style}>
      <img className="employee-demo-child3" alt="" src="/ellipse-2.svg" />
      <img className="image-7-icon5" alt="" src="/image-7@2x.png" />
      <div className="name-lastname5">Name LastName</div>
      <div className="position5">Position</div>
      <div className="streak-of-projects5">Streak of Projects</div>
      <div className="email-address5">Email Address</div>
      <div className="phone-number5">Phone Number</div>
      <img className="image-8-icon5" alt="" src="/image-8@2x.png" />
      <img className="image-9-icon5" alt="" src="/image-9@2x.png" />
      <img className="image-10-icon5" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon5" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon5" alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default EmployeeDemo1;
