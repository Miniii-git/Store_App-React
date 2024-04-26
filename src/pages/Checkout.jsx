import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";

function Checkout() {
  const { state } = useContext(TedadBuyProvider);
  return (
    <div>
      <h3> number of bought products : {state}</h3>
      <div></div>
    </div>
  );
}

export default Checkout;
