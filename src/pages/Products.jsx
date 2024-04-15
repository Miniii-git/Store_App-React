import { useEffect, useState, useContext } from "react";
import api from "../services/config";
import Item from "../components/Item";
import styles from "./products.module.css";
import { dataContext } from "../App";

function Products() {
  const data = useContext(dataContext);
  return (
    <div>
      <h3>all products</h3>
      <div className={styles.products}>
        {data.map((item) => (
          <Item key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
