import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import "./App.css";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState(["Vegetables", "Fruits", "Protein"]);

  const onKeyDown = (task) => {
    if (task.key === "Enter") {
      let newFoodItem = task.target.value;
      task.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="list-heading">Healthy Food List</h1>
        <FoodInput handleOnChange={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
