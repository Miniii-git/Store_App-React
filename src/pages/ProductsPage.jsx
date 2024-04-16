import { DataContext } from "../context/FFF";
import { useContext } from "react";
import Item from "../components/Item";
import styles from "./products.module.css";
import { Grid } from "react-loader-spinner";

function ProductsPage() {
  const { data, isLoading } = useContext(DataContext);
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
