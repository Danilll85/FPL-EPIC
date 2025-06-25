import { createContext, type Dispatch } from "react";
import type { Action } from "./reducer";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export type State = {
  cart: CartItem[] | [];
};

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const defaultState: State = {
  cart: [],
};

export const Context = createContext<ContextType>({
  state: defaultState,
  dispatch: () => {},
});
