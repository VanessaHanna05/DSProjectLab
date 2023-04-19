import { useMemo } from "react";
import "./Meeting1.css";

const Meeting1 = ({
  propTop,
  meeting1MeetingLeft,
  meeting1MeetingBorderRadius,
}) => {
  const meetingStyle = useMemo(() => {
    return {
      top: propTop,
      left: meeting1MeetingLeft,
      borderRadius: meeting1MeetingBorderRadius,
    };
  }, [propTop, meeting1MeetingLeft, meeting1MeetingBorderRadius]);

  return (
    <div className="meeting21" style={meetingStyle}>
      <img className="meeting-child18" alt="" src="/rectangle-37.svg" />
      <div className="meeting-1-at21">Meeting 1 at hh:mm on dd/mm</div>
      <img className="image-23-icon21" alt="" src="/image-23@2x.png" />
    </div>
  );
};

export default Meeting1;
