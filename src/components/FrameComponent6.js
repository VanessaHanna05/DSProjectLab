import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FrameComponent6.css";

const FrameComponent6 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  return (
    <div className="organize-your-co-group" onClick={onFrameContainerClick}>
      <div className="organize-your-co3">Organize your co.</div>
      <a className="employees9">
        <img className="employees-child6" alt="" src="/polygon-3.svg" />
        <div className="label12">Employees</div>
      </a>
      <Link className="employees10" to="/projects-ceo">
        <img className="employees-child6" alt="" src="/polygon-3.svg" />
        <div className="label12">Projects</div>
      </Link>
      <Link className="employees11" to="/profile-ceo">
        <img className="employees-child6" alt="" src="/polygon-3.svg" />
        <div className="label12">Meetings</div>
      </Link>
      <Link className="employees12" to="/profile-ceo">
        <img className="employees-child6" alt="" src="/polygon-3.svg" />
        <div className="label12">Profile</div>
      </Link>
      <div className="frame-child13" />
      <div className="frame-child14" />
      <div className="frame-child15" />
      <img className="frame-child16" alt="" src="/line-5.svg" />
    </div>
  );
};

export default FrameComponent6;
