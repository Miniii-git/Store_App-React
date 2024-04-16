import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";

function Item({ info }) {
  const [tedadBuyEveryItem, setTedadBuyEveryItem] = useState(0);
  const { tedadBuy, setTedadBuy } = useContext(TedadBuyProvider);

  function addHandler() {
    setTedadBuy((tedadBuy) => tedadBuy + 1);
    setTedadBuyEveryItem((tedadBuyEveryItem) => tedadBuyEveryItem + 1);
  }

  return (
    <div className={styles.Item}>
      <Link to={`/products/${info.id}`}>
        <img src={info.image} width="150px" height="150px" alt={info.title} />
      </Link>

      <hr />
      <p>${info.price} </p>
      <p>{info.rating.rate} *</p>
      <button onClick={addHandler}>
        <TbShoppingBagCheck style={{ fontSize: "30px" }} />
      </button>
      <span>{tedadBuyEveryItem}</span>
    </div>
  );
}

export default Item;
