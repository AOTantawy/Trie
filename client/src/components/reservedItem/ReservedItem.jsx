import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./styles/reserved-item.module.css";

function increment(itemCounter, setItemCounter) {
  setItemCounter(++itemCounter);
}

function decrement(itemCounter, setItemCounter) {
  setItemCounter(itemCounter ? --itemCounter : 0);
}

function Item(props) {
  let [itemCounter, setItemCounter] = useState(0);

  return (
    <span className={`item-list ${styles["item"]}`}>
      <p
        className={`rounded text-center ${styles["item-counter"]}`}
        name="item-counter"
      >
        {itemCounter}
      </p>
      <h6 className={styles["item-name"]} name="item-name">
        {props.name}
      </h6>
      <div>
        <button
          className={`rounded ${styles["add-item"]}`}
          onClick={() => increment(itemCounter, setItemCounter)}
          type="button"
        >
          <AddIcon />
        </button>
        <button
          className={`rounded ${styles["remove-item"]}`}
          onClick={() => decrement(itemCounter, setItemCounter)}
          type="button"
        >
          <RemoveIcon />
        </button>
      </div>
    </span>
  );
}

export default Item;
