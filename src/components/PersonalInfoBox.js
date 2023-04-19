import Info from "./Info";
import "./PersonalInfoBox.css";

const PersonalInfoBox = () => {
  return (
    <form className="personal-info-box" id="employee box">
      <div className="personal-info-box-child" />
      <img className="personal-info-box-item" alt="" src="/ellipse-4@2x.png" />
      <div className="username">{`Username `}</div>
      <Info />
      <Info propBottom="191px" propLeft="32px" />
      <Info propBottom="272px" propLeft="286px" />
      <Info propBottom="191px" propLeft="283px" />
      <div className="email-notification-tick">
        <img className="check-1-icon" alt="" src="/check-1@2x.png" />
        <div className="receive-email-notifications">
          Receive email notifications
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoBox;
