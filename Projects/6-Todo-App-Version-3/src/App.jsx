import "./App.css";
import TodoItemsContextProvider from "./assets/Store/Todo-items-store";
import AddTodo from "./Componants/AddTodo";
import AppName from "./Componants/AppName";
import TodoItems from "./Componants/TodoItems";
import WelcomeMessage from "./Componants/WelcomeMsg";
import Container from "./Componants/Container"

function App() {
  return (
    <Container>
    <TodoItemsContextProvider>
      <center className="items-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
    </Container>
  );
}

export default App;
