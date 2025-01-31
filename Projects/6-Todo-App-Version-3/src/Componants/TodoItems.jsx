import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../assets/Store/Todo-items-store";

const TodoItemList = ({ OnDeleteClick }) => {
  const allItems = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {allItems.map((item, index) => (
        <TodoItem
          key={index}
          name={item.ListName}
          date={item.ListDate}
          OnDeleteClick={OnDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItemList;
