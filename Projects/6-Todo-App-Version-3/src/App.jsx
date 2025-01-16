import AddTodo from "./Componants/AddTodo";
import AppName from "./Componants/AppName";
import TodoItemList from "./Componants/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./Componants/WelcomeMsg";
import Container from "./Componants/Container";

function App() {
  const [todoListItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue,
        { ListName: itemName, ListDate: itemDate },
      ];
      return newTodoItems;
    });
    //console.log(`new item added: ${itemName} ${itemDate}`);
  };

  const handleDeleteItem = (DellitemName) => {
    const newTodoItems = todoListItems.filter((item) => {
      return item.ListName !== DellitemName;
    });
    setTodoItems(newTodoItems);
    //console.log(`button is: ${DellitemName}`);
  };

  return (
    <Container>
      <div className="todo-container" style={{ textAlign: "center" }}>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoListItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <TodoItemList
          allItems={todoListItems}
          OnDeleteClick={handleDeleteItem}
        />
      </div>
    </Container>
  );
}

export default App;
