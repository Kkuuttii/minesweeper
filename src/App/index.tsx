import styles from "./index.module.scss";
import PlayingField from "../PlayingField";
import ScoreTable from "../ScoreTable";
import { useState } from "react";

function App() {
  const [isTimerStarted, setTimerStarted] = useState<boolean>(false);
  const [isCellDown, setCellDown] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <ScoreTable isTimerStarted={isTimerStarted} isCellDown={isCellDown} />
      <PlayingField
        onCellClick={() => setTimerStarted(true)}
        cellMouseDownHandler={() => setCellDown(true)}
        cellMouseUpHandler={() => setCellDown(false)}
      />
    </div>
  );
}

export default App;
