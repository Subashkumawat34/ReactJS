import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";

import { TodoItemsContext } from "../assets/Store/Todo-items-store";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
