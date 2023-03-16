import styles from "./index.module.scss";
import PlayingField from "../PlayingField";
import ScoreTable from "../ScoreTable";
function App() {
  return (
    <div className={styles.app}>
      <ScoreTable />
      <PlayingField />
    </div>
  );
}

export default App;
