import { useState, createContext, useReducer } from "react";
import { sumProducts } from "../helpers/helperFunctions";
import Checkout from "../pages/Checkout";
export const TedadBuyProvider = createContext();

const initialState = {
  selectedItems: [], //[ { category:"-", description:"-", id:2, image:"-", price:"-", quantity:1 } , ... , { } ]
  totalNumber: 0,
  totalPrice: 0,
  checkoutStatus: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkoutStatus: false,
      };

    case "REMOVE_ITEM":
      state.selectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "INCREASE":
      const indexToIncreas = state.selectedItems.findIndex(
        (i) => (i.id = action.payload.id)
      );
      state.selectedItems[indexToIncreas].quantity += 1;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "DECREASE":
      const indexToDecreas = state.selectedItems.findIndex(
        (i) => (i.id = action.payload.id)
      );
      state.selectedItems[indexToDecreas].quantity -= 1;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        ...sumProducts([]),
        checkoutStatus: true,
      };

    default:
      throw new Error("invalid action♣");
  }
}

function TedadBuyContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TedadBuyProvider.Provider value={{ state, dispatch }}>
      {children}
    </TedadBuyProvider.Provider>
  );
}

export default TedadBuyContext;
