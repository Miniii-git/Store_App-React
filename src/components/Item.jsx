import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";
import { shortenText, showProductQuantity } from "../helpers/helperFunctions";
import { AiOutlineDelete } from "react-icons/ai";

function Item({ info }) {
  const { state, dispatch } = useContext(TedadBuyProvider);
  const quantity = showProductQuantity(state, info.id);

  function clickHandler(type) {
    dispatch({ type, payload: info });
    console.log(quantity);
  }

  return (
    <div className={styles.Item}>
      <Link to={`/products/${info.id}`}>
        <img src={info.image} width="150px" height="150px" alt={info.title} />
      </Link>
      <hr />
      <p>{shortenText(info.title)} </p>
      <p>${info.price} </p>
      <p>{info.rating.rate} *</p>
      <div className={styles.action}>
        <button onClick={() => clickHandler("REMOVE_ITEM")}>
          <AiOutlineDelete />
        </button>
        <button onClick={() => clickHandler("DECREASE")}>-</button>
        <span> {quantity} </span>{" "}
        <button onClick={() => clickHandler("INCREASE")}>+</button>
        <button onClick={() => clickHandler("ADD_ITEM")}>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Item;
