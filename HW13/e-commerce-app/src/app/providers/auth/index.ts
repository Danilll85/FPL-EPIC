import { createContext, type Dispatch } from "react";
import type { Action } from "./reducer";

export type State = {
  isAuth: boolean;
  username: string;
};

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const defaultState: State = {
  isAuth: false,
  username: '',
};

export const Context = createContext<ContextType>({
  state: defaultState,
  dispatch: () => {},
});
