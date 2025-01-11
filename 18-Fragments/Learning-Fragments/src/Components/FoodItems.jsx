import { useState } from "react";
import Item from "./Items";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, task) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems)
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyBtn={(task) => onBuyButton(item, task)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
