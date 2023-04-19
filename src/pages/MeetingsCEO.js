import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import "./MeetingsCEO.css";

const MeetingsCEO = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onMenuBurger21Click = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  return (
    <div className="meetings-ceo">
      <div className="meeting-page">
        <FrameComponent5
          navTop="0px"
          onFrameContainerClick={onFrameContainerClick}
          onMenuBurger21Click={onMenuBurger21Click}
        />
        <div className="weekly-meetings">{`Weekly Meetings `}</div>
      </div>
      <div className="meeting8" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting9" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting10" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting11" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting12" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting13" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting14" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting15" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting16" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting17" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting18" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting19" id="meeting sum">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon8" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting20">
        <img className="meeting-child5" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at8">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon20" alt="" src="/image-231@2x.png" />
      </div>
    </div>
  );
};

export default MeetingsCEO;
