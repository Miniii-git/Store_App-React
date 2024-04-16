import { useEffect, useState } from "react";
import api from "../services/config";
import Item from "../components/Item";
import styles from "./products.module.css";
import { Grid } from "react-loader-spinner";

function ProductsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.get("/products").then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);
  console.log(data);

  return (
    <>
      <h3>all products</h3>
      {isLoading ? (
        <div id={styles.loader}>
          <Grid
            visible={true}
            height="80"
            width="80"
            color="#dd1d60"
            radius="12.5"
          />
        </div>
      ) : (
        <div className={styles.products}>
          {data.map((item) => (
            <Item key={item.id} info={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductsPage;
