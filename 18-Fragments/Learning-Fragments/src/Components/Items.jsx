import styles from "./Items.module.css";
const Item = ({ foodItem }) => {return <li className={`${styles["item-btn"]} list-group-item`}>{foodItem}</li>;
};

export default Item;
