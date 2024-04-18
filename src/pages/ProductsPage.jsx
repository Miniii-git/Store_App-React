import { DataContext } from "../context/FFF";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/Item";
import styles from "./products.module.css";
import { Grid } from "react-loader-spinner";
import Search from "../components/Search";

function ProductsPage() {
  const { products, setProducts, data, isLoading } = useContext(DataContext);
  const [query, setQuery] = useSearchParams();
  const [searchedWord, setSearchedWord] = useState("");

  const categoryHandler = (event) => {
    setProducts(data.filter((i) => i.category === event.target.value));
    setQuery({ category: event.target.value });
  };

  const showAll = () => {
    setProducts(data);
    setQuery({});
  };

  useEffect(() => {
    setProducts(products.filter((i) => i.title.match(searchedWord)));
    let category_query = query.get("category");
    setQuery({ category_query, search: searchedWord });
  }, [searchedWord]);

  return (
    <>
      <Search searchedWord={searchedWord} setSearchedWord={setSearchedWord} />
      <div className={styles.ProductsPage}>
        <div>
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
              {products.map((item) => (
                <Item key={item.id} info={item} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.category}>
          <button onClick={showAll} value="all">
            all
          </button>
          <button onClick={categoryHandler} value="electronics">
            electronics
          </button>
          <button onClick={categoryHandler} value="jewelery">
            jewelery
          </button>
          <button onClick={categoryHandler} value="men's clothing">
            men's clothing
          </button>
          <button onClick={categoryHandler} value="women's clothing">
            women's clothing
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
