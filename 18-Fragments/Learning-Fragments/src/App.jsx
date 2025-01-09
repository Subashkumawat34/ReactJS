import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import "./App.css";

function App() {
  const foodItems = ["Vegetables", "Fruits", "Protein", "Dal", "Salad", "Roti","Coconut","Nuts"];
  //const foodItems = [];

  return (
    <>
      <h1 className="list-heading">Healthy Food List</h1>
      <ErrorMsg items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
