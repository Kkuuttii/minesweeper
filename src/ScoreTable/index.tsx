import styles from "./index.module.scss";
import usualMouse from "../images/usualMouse.jpeg";
import interestedMouse from "../images/interestedMouse.png";
import Timer from "../Timer";

interface IScoreTable {
  isTimerStarted: boolean;
  isCellDown: boolean;
}

function ScoreTable({ isTimerStarted, isCellDown }: IScoreTable) {
  return (
    <div className={styles.ScoreTable}>
      <div>040</div>
      <div>
        <img
          src={isCellDown ? interestedMouse : usualMouse}
          alt="mouse"
          className={styles.image}
        ></img>
      </div>
      <Timer isTimerStarted={isTimerStarted} />
    </div>
  );
}

export default ScoreTable;
