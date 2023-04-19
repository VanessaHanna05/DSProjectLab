import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Project1 from "../components/Project1";
import "./ProjectsCEO.css";

const ProjectsCEO = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onMenuBurger21Click = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  return (
    <div className="projects-ceo">
      <div className="organize-your-co-parent" onClick={onFrameContainerClick}>
        <div className="organize-your-co1">Organize your co.</div>
        <Link className="employees" to="/employees-ceo">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Employees</div>
        </Link>
        <div className="employees1">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Projects</div>
        </div>
        <div className="employees2">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Meetings</div>
        </div>
        <div className="employees3">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Profile</div>
        </div>
        <div className="line-div" />
        <div className="frame-child4" />
        <div className="frame-child5" />
        <img className="line-icon" alt="" src="/line-5.svg" />
        <img
          className="menu-burger-2-1"
          alt=""
          src="/menuburger-2-1@2x.png"
          onClick={onMenuBurger21Click}
        />
      </div>
      <Project1 />
      <Project1 checkbox1Left="767px" clientDemoBackgroundColor="#1d67d6" />
      <Project1 checkbox1Left="1108px" clientDemoBackgroundColor="#d61dad" />
    </div>
  );
};

export default ProjectsCEO;
