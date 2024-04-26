import { useContext } from "react";
import { TedadBuyProvider } from "../context/TedadBuyContext";
import { sumProducts } from "../helpers/helperFunctions";
import ItemInCheckout from "../components/ItemInCheckout";

function Checkout() {
  const { state, dispatch } = useContext(TedadBuyProvider);
  const total = sumProducts(state.selectedItems);

  const checkoutHandler = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <div>
      <div>
        <p>total products : {total.totalNumber}</p>
        <p>total prices : $ {total.totalPrice.toFixed(2)}</p>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
      <div>
        {state.selectedItems.map((product) => (
          <ItemInCheckout key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
