import styles from "./App.module.css";
import "./App.css";
import Display from "./Components/Display";
import BtnContainer from "./Components/BtnContainer";

function App() {
  return (
    <div className={styles.calculator}>
    <Display></Display>
      <BtnContainer></BtnContainer>
    </div>
  );
}

export default App;
