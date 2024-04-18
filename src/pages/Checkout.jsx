import { useState } from "react";
import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";

function Checkout() {
  const { checkout } = useContext(TedadBuyProvider);
  return (
    <div>
      <h3> number of bought products : {checkout.length}</h3>
      <div>
        {checkout.map((i) => (
          <p key={i.id}>
            <img width="20px" src={i.image} /> {i.title} : {i.price}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Checkout;
