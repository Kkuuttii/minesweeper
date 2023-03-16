import styles from "./index.module.scss";
import usualMouse from "../images/usualMouse.jpeg";

function ScoreTable() {
  return (
    <div className={styles.ScoreTable}>
      <div>осталось 40 мин</div>
      <div>
        <img src={usualMouse} alt="mouse" className={styles.image}></img>
      </div>
      <div>таймер</div>
    </div>
  );
}

export default ScoreTable;
