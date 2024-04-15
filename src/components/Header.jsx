import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <h1>
        <Link to="/products"> Store Project</Link>
      </h1>
      <button>
        <Link to="/checkout"> checkout</Link>
      </button>
    </div>
  );
}

export default Header;
