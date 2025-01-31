import AddTodo from "./Componants/AddTodo";
import AppName from "./Componants/AppName";
import TodoItemList from "./Componants/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./Componants/WelcomeMsg";
import Container from "./Componants/Container";
import { TodoItemsContext } from "./assets/Store/Todo-items-store";

function App() {
  const [todoListItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [
        { ListName: itemName, ListDate: itemDate },
        ...currentValue,
      ];
      return newTodoItems;
    });
    //console.log(new item added: ${itemName} ${itemDate});
  };

  const handleDeleteItem = (DellitemName) => {
    const newTodoItems = todoListItems.filter((item) => {
      return item.ListName !== DellitemName;
    });
    setTodoItems(newTodoItems);
    //console.log(button is: ${DellitemName});
  };

  return (
    <TodoItemsContext.Provider value={todoListItems}>
      <Container>
        <div className="todo-container" style={{ textAlign: "center" }}>
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          <WelcomeMsg></WelcomeMsg>
          <TodoItemList OnDeleteClick={handleDeleteItem} />
        </div>
      </Container>
    </TodoItemsContext.Provider>
  );
}

export default App;
