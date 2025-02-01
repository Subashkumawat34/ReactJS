import { useContext } from "react";
import { TodoItemsContext } from "../assets/Store/Todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./Container.module.css";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
