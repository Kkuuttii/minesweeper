import styles from "./index.module.scss";
import usualMouse from "../images/usualMouse.jpeg";

function ScoreTable() {
  return (
    <div className={styles.ScoreTable}>
      <div>040</div>
      <div>
        <img src={usualMouse} alt="mouse" className={styles.image}></img>
      </div>
      <div>000</div>
    </div>
  );
}

export default ScoreTable;
