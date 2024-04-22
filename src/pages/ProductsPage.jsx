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
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({ category: "all", search: "" });
  const { data, isLoading } = useContext(DataContext);
  const [urlQuery, setUrlQuery] = useSearchParams();

  useEffect(() => {
    setProducts(data);
    const qu = {};
    const cat = urlQuery.get("category");
    const sea = urlQuery.get("search");
    if (cat) {
      qu.category = cat;
    } else {
      qu.category = "all";
    }
    if (sea) qu.search = sea;
    setQuery(qu);
  }, [data]);

  const changeHandler = (e) => {
    setTyping(e.target.value.toLowerCase());
  };

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search: typing }));
    setTyping("");
  };

  const categoryHandler = (event) => {
    setQuery((query) => ({ ...query, category: event.target.value }));
  };

  useEffect(() => {
    if (query.category === "all") {
      setProducts(
        data.filter((i) => i.title.toLocaleLowerCase().match(query.search))
      );
      {
        query.search ? setUrlQuery({ search: query.search }) : setUrlQuery({});
      }
    } else {
      setProducts(
        data.filter(
          (i) =>
            i.title.toLocaleLowerCase().match(query.search) &&
            i.category === query.category
        )
      );
      {
        query.search
          ? setUrlQuery(query)
          : setUrlQuery({ category: query.category });
      }
    }
  }, [query]);

  return (
    <>
      <div className={styles.Search}>
        <input type="text" value={typing} onChange={changeHandler} />
        <button onClick={searchHandler}>
          <HiOutlineSearch />
        </button>
      </div>
      {query.search && <p>{`search result for : ${query.search}`}</p>}
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
