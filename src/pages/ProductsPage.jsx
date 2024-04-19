import { DataContext } from "../context/FFF";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/Item";
import styles from "./products.module.css";
import { Grid } from "react-loader-spinner";
import { categories } from "../constants/constat_var";
import { HiOutlineSearch } from "react-icons/hi";

function ProductsPage() {
  const [typing, setTyping] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const { data, isLoading, products, setProducts } = useContext(DataContext);
  const [query, setQuery] = useState({ category: "all", search: "" });
  const [urlQuery, setUrlQuery] = useSearchParams();

  const changeHandler = (e) => {
    setTyping(e.target.value.toLowerCase());
  };

  const searchHandler = () => {
    setSearchedWord(typing);
    setQuery((query) => ({ ...query, search: typing }));
  };

  useEffect(() => {
    setUrlQuery(query);
    if (query.category === "all") {
      setProducts(
        data.filter((i) => i.title.toLocaleLowerCase().match(searchedWord))
      );
    } else {
      setProducts(
        data.filter(
          (i) =>
            i.title.toLocaleLowerCase().match(searchedWord) &&
            i.category === query.category
        )
      );
    }
  }, [query]);

  const categoryHandler = (event) => {
    setQuery((query) => ({ ...query, category: event.target.value }));
    if (event.target.value === "all") {
      setProducts(data);
    } else {
      setProducts(data.filter((i) => i.category === event.target.value));
    }
  };
  console.log(query);
  return (
    <>
      <div className={styles.Search}>
        <input type="text" value={typing} onChange={changeHandler} />
        <button onClick={searchHandler}>
          <HiOutlineSearch />
        </button>
      </div>
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
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={categoryHandler}
              value={category.toLocaleLowerCase()}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
