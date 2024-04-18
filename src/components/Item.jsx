import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";
import { shortenText } from "../helpers/helperFunctions";

function Item({ info }) {
  const { checkout, setCheckout } = useContext(TedadBuyProvider);

  function addHandler(event) {
    setCheckout((checkout) => [...checkout, info]);
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
      <button onClick={addHandler}>
        <TbShoppingBagCheck style={{ fontSize: "30px" }} />
      </button>
      <span> 0</span>
    </div>
  );
}

export default Item;
