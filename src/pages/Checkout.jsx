import { useState } from "react";
import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";

function Checkout() {
  const { tedadBuy } = useContext(TedadBuyProvider);
  return (
    <div>
      <h3> number of bought products : {tedadBuy}</h3>
    </div>
  );
}

export default Checkout;
