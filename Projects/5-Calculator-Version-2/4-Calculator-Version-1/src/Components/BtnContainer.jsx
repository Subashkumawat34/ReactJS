import styles from "./BtnContainer.module.css";
const BtnContainer = (props) => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {btnNames.map((names, index) => {
        return (
          <button key={index} className={styles.btns} onClick={()=>props.onBtnClick(names)}>
            {names}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
