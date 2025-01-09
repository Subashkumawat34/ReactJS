import TodoItem from "./TodoItem";

const TodoItemList = ({ allItems }) => {
  return (
    <div className="items-container">
      {allItems.map((item, index) => (
        <TodoItem key={index} name={item.ListName} date={item.ListDate} />
      ))}
    </div>
  );
};

export default TodoItemList;
