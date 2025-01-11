import TodoItem from "./TodoItem";

const TodoItemList = ({ allItems, OnDeleteClick }) => {
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
