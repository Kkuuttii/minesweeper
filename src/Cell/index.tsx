import styles from "./index.module.scss";
import { useState } from "react";

interface ICell {
  onClick: () => void;
}

function Cell({ onClick }: ICell) {
  const [clicked, setClicked] = useState<boolean>(false);
  const handlerClick = () => {
    setClicked(true);
    onClick();
  };
  return (
    <div
      className={clicked === false ? styles.cell : styles.clickedCell}
      onClick={handlerClick}
    ></div>
  );
}

export default Cell;
