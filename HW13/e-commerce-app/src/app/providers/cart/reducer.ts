import type { CartItem, State } from "./index";

type ADD_ITEM = {
  type: "ADD_ITEM";
  value: CartItem;
};

type REMOVE_ITEM = {
  type: "REMOVE_ITEM";
  id: number;
};

type UPDATE_QUANTITY = {
  type: "UPDATE_QUANTITY";
  operation: "increase" | "decrease";
  id: number;
};

export type Action = ADD_ITEM | REMOVE_ITEM | UPDATE_QUANTITY;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.value] };
      break;
    case "UPDATE_QUANTITY":
      if (action.operation === "increase") {
        return {
          ...state,
          cart: state.cart.map((elem) => {
            if (+elem.id === action.id) {
              return { ...elem, quantity: elem.quantity + 1 };
            }
            return elem;
          }),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((elem) => {
            if (+elem.id === action.id) {
              return { ...elem, quantity: elem.quantity - 1 };
            }
            return elem;
          }),
        };
      }
      break;
    case "REMOVE_ITEM":
      return { ...state, cart: state.cart.filter((elem) => +elem.id !== action.id) };
      break;
  }
  return state;
};
