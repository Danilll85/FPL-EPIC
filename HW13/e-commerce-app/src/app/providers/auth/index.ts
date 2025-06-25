import { createContext, type Dispatch } from "react";
import type { Action } from "./reducer";

export type State = {
  isAuth: boolean;
};

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const defaultState: State = {
  isAuth: false,
};

export const Context = createContext<ContextType>({
  state: defaultState,
  dispatch: () => {},
});
