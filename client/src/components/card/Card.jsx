import React from "react";
import styles from "./styles/card.module.css";

export default Card;

function Card(props) {
  return (
    <div className={`card ${styles["card-container"]}`}>
      <img src={props.src} className="card-img-top" alt={props.src} />
      <div className="card-body">
        <h5 className={`card-title ${styles["card-heading"]}`}>
          {props.title}
        </h5>
        <p className={`card-text ${styles["card-body"]}`}>{props.content}</p>
      </div>
    </div>
  );
}