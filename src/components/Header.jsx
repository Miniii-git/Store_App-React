import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { sumProducts } from "../helpers/helperFunctions";

function Header() {
  const { state } = useContext(TedadBuyProvider);
  const total = sumProducts(state.selectedItems);
  return (
    <div className={styles.Header}>
      <h1>
        <Link to="/products"> Store Project</Link>
      </h1>
      <div>
        <Link to="/checkout">
          <PiShoppingCartBold id={styles.shoppingCard} />
        </Link>
        <span id={styles.showTedad}> {total.totalNumber} </span>
      </div>
    </div>
  );
}

export default Header;
