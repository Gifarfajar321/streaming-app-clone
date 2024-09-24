import { useRef } from "react";
import QandACard from "./Q&ACard";
import ToggleCard from "./ToggleCard";

const GroupCardToggle = (props) => {
  const { header, textFillTop, textFillBottom, className } = props;

  const DetailRef = useRef(null);

  const DetailClick = (e) => {
    console.log("click");
    e.preventDefault();
    DetailRef.current.classList.toggle("detail-click");
    e.target.classList.toggle("toggle-btn")
  };

  return (
    <>
      <div>
        <ToggleCard toggleClick={DetailClick} refToggleBtn={DetailClick}>
          {header}
        </ToggleCard>
        <QandACard refCard={DetailRef}>
          <QandACard.TopBody className={className}>
            {textFillTop}
          </QandACard.TopBody>
          <QandACard.BottomBody>{textFillBottom}</QandACard.BottomBody>
        </QandACard>
      </div>
    </>
  );
};

export default GroupCardToggle;
