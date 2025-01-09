import AddTodo from "./Componants/AddTodo";
import AppName from "./Componants/AppName";
import TodoItemList from "./Componants/TodoItems";
import "./App.css";

function App() {
  const todoListItems = [
    {
      ListName: "Mern Stack Developer",
      ListDate: "2/24/2025",
    },
    {
      ListName: "Developer",
      ListDate: "2/24/2075",
    },
    {
      ListName: "Mern Stack Developer",
      ListDate: "2/24/2025",
    },
    {
      ListName: "Mern Stack Developer",
      ListDate: "2/24/2025",
    },
  ];

  return (
    <div className="todo-container" style={{ textAlign: "center" }}>
      <AppName />
      <AddTodo />
      <TodoItemList allItems={todoListItems} />
    </div>
  );
}

export default App;
