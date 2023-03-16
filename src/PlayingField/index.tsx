import styles from "./index.module.scss";
import Cell from "../Cell";
function PlayingField() {
  const cells = [];
  for (let i = 0; i < 256; i++) {
    cells.push(<Cell />);
  }

  return <div className={styles.PlayingField}>{cells}</div>;
}

export default PlayingField;
