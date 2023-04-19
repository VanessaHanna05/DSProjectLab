import { useMemo } from "react";
import "./Project1.css";

const Project1 = ({ checkbox1Left, clientDemoBackgroundColor }) => {
  const project1Style = useMemo(() => {
    return {
      left: checkbox1Left,
    };
  }, [checkbox1Left]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: clientDemoBackgroundColor,
    };
  }, [clientDemoBackgroundColor]);

  return (
    <div className="project8" id="Project sum" style={project1Style}>
      <div className="project-name-wrapper5" style={frameDiv1Style}>
        <div className="project-name8">Project Name</div>
      </div>
      <div className="client-demo24" id="project info">
        <div className="client-demo-child45" />
        <div className="benefits32">
          <span className="benefits33">Benefits</span>:
        </div>
        <div className="client-name24">Client Name</div>
        <div className="location24">{`location: `}</div>
        <img
          className="client-demo-child46"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <img className="checkbox-1-icon24" alt="" src="/checkbox-1@2x.png" />
      </div>
      <div className="client-demo25">
        <div className="client-demo-child45" />
        <div className="benefits32">
          <span className="benefits33">Contributions</span>:
        </div>
        <div className="client-name24">Employee 1</div>
        <div className="location24">Position:</div>
        <img
          className="client-demo-child48"
          alt=""
          src="/rectangle-191@2x.png"
        />
        <img className="checkbox-1-icon24" alt="" src="/checkbox-11@2x.png" />
      </div>
      <div className="client-demo26">
        <div className="client-demo-child45" />
        <div className="benefits32">
          <span className="benefits33">Contributions</span>:
        </div>
        <div className="client-name24">Employee 2</div>
        <div className="location24">Position:</div>
        <img
          className="client-demo-child48"
          alt=""
          src="/rectangle-192@2x.png"
        />
        <img className="checkbox-1-icon24" alt="" src="/checkbox-12@2x.png" />
      </div>
    </div>
  );
};

export default Project1;
