import styles from "./App.module.css";
import "./App.css";
import Display from "./Components/Display";
import BtnContainer from "./Components/BtnContainer";
import { useState } from "react";

function App() {
  let [calVal, newCalVal] = useState("");

  const onBtnClick = (buttonText) => {
    if (buttonText === "C") {
      newCalVal("");
    } else if (buttonText === "=") {
      const resuleVal = eval(calVal);
      newCalVal(resuleVal);
    } else {
      let newDisplayVal = calVal + buttonText;
      newCalVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <BtnContainer onBtnClick={onBtnClick}></BtnContainer>
    </div>
  );
}

export default App;
