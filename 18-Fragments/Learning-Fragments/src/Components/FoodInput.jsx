import styles from "./FoodInput.module.css";
const FoodInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items Here"
      className={styles.foodinputholder}
      onKeyDown={props.handleOnChange}
    ></input>
  );
};

export default FoodInput;
