import { createContext, type Dispatch } from "react";
import type { Action } from "./reducer";

export type Theme = "light" | "dark";

export type State = {
  theme: Theme;
};

export const defaultState: State = {
  theme: "light",
};

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const Context = createContext<ContextType>({
  state: defaultState,
  dispatch: () => {},
});