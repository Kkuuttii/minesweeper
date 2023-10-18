import styles from "./index.module.scss";
import PlayingField from "../PlayingField";
import ScoreTable from "../ScoreTable";
import { useState, useCallback } from "react";

function App() {
  const [isTimerStarted, setTimerStarted] = useState<boolean>(false);
  const [isCellDown, setCellDown] = useState<boolean>(false);

  const cellMouseDownHandler = useCallback(() => setCellDown(true), []);
  const cellMouseUpHandler = useCallback(() => setCellDown(false), []);

  return (
    <div className={styles.app}>
      <ScoreTable isTimerStarted={isTimerStarted} isCellDown={isCellDown} />
      <PlayingField
        onCellClick={() => setTimerStarted(true)}
        onCellMouseDown={cellMouseDownHandler}
        onCellMouseUp={cellMouseUpHandler}
      />
    </div>
  );
}

export default App;
