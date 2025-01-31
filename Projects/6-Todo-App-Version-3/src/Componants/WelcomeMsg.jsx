import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../assets/Store/Todo-items-store";
const WelcomeMsg = () => {
  const todoListItems = useContext(TodoItemsContext);
  return (
    todoListItems.length === 0 && (
      <p className={styles.welcomeMsg}>Task's list is Empty!! Enjoy...</p>
    )
  );
};

export default WelcomeMsg;
