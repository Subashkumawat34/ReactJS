import styles from "./Items.module.css";
const Item = ({ foodItem, bought, handleBuyBtn }) => {
  return (
    <li className={`${styles["item-btn"]} list-group-item ${bought && 'active'}`}>
      {foodItem}
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleBuyBtn}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
