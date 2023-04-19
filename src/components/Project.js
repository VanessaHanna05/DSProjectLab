import { useMemo } from "react";
import "./Project.css";

const Project = ({ frame11Top, frame11Left, locationDisplay }) => {
  const projectStyle = useMemo(() => {
    return {
      top: frame11Top,
      left: frame11Left,
    };
  }, [frame11Top, frame11Left]);

  const clientNameStyle = useMemo(() => {
    return {
      display: locationDisplay,
    };
  }, [locationDisplay]);

  return (
    <div className="project7" id="proj" style={projectStyle}>
      <div className="project-name-wrapper4">
        <div className="project-name7">Project Name</div>
      </div>
      <div className="client-demo21">
        <div className="client-demo-child39" />
        <div className="benefits28">
          <span className="benefits29">Benefits</span>:
        </div>
        <div className="client-name21">Client Name</div>
        <div className="location21">{`location: `}</div>
        <img
          className="client-demo-child40"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <img className="checkbox-1-icon21" alt="" src="/checkbox-1@2x.png" />
      </div>
      <div className="client-demo22">
        <div className="client-demo-child39" />
        <div className="benefits28">
          <span className="benefits29">Contributions</span>:
        </div>
        <div className="client-name21" style={clientNameStyle}>
          Employee 1
        </div>
        <div className="location21">Position:</div>
        <img
          className="client-demo-child42"
          alt=""
          src="/rectangle-191@2x.png"
        />
        <img className="checkbox-1-icon21" alt="" src="/checkbox-11@2x.png" />
      </div>
      <div className="client-demo23">
        <div className="client-demo-child39" />
        <div className="benefits28">
          <span className="benefits29">Contributions</span>:
        </div>
        <div className="client-name21">Employee 2</div>
        <div className="location21">Position:</div>
        <img
          className="client-demo-child42"
          alt=""
          src="/rectangle-192@2x.png"
        />
        <img className="checkbox-1-icon21" alt="" src="/checkbox-12@2x.png" />
      </div>
    </div>
  );
};

export default Project;
