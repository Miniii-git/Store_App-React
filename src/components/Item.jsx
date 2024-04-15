import React from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";

function Item({ info }) {
  return (
    <div className={styles.Item}>
      <Link to={`/products/${info.id}`}>
        <img src={info.image} width="150px" height="150px" alt={info.title} />
      </Link>

      <hr />
      <p>${info.price} </p>
      <p>{info.rating.rate} *</p>
    </div>
  );
}

export default Item;
