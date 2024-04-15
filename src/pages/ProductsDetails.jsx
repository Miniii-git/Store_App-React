import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/config";
import styles from "./productDetails.module.css";

function ProductsDetails() {
  const [info, setInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`/${id}`).then((res) => setInfo(res));
  }, []);

  return (
    <>
      <h3>ProductsDetails:{id}</h3>
      <br />
      <h4>{info.title}</h4>
      <br />
      <div className={styles.Info}>
        <img src={info.image} width="300px" height="300px" />
        <p>{info.description}</p>
      </div>
    </>
  );
}

export default ProductsDetails;
