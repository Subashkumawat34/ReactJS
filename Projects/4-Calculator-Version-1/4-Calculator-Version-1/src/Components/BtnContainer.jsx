import styles from "./BtnContainer.module.css";
const BtnContainer = () => {
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
      {btnNames.map((names) => {
        return <button className={styles.btns}>{names}</button>;
      })}
    </div>
  );
};

export default BtnContainer;
