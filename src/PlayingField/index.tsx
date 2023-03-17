import styles from "./index.module.scss";
import { useState } from "react";
import Cell from "../Cell";

function PlayingField() {
  const [clickedCell, setClickedCell] = useState<boolean>(false);
  const cells = [];
  for (let i = 0; i < 256; i++) {
    cells.push(<Cell onClick={() => console.log(20)} />);
  }

  return <div className={styles.PlayingField}>{cells}</div>;
}

export default PlayingField;
