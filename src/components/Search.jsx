import { useState } from "react";
import styles from "./search.module.css";
import { HiOutlineSearch } from "react-icons/hi";

function Search({ searchedWord, setSearchedWord }) {
  const [typing, setTyping] = useState("");

  const changeHandler = (e) => {
    setTyping(e.target.value);
  };

  const searchHandler = () => {
    setSearchedWord(typing);
    setTyping("");
  };

  return (
    <div className={styles.Search}>
      <input type="text" value={typing} onChange={changeHandler} />
      <button onClick={searchHandler}>
        <HiOutlineSearch />
      </button>
    </div>
  );
}

export default Search;
