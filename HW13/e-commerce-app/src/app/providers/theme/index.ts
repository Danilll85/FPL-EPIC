import { createContext, type Dispatch } from "react";
import type { Action } from "./reducer";

export type Theme = "light" | "dark";

export type State = {
  theme: Theme;
};

const loadTheme = (): State => {
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    localStorage.setItem("theme", "light");
    return { theme: "light" };
  } else {
    return { theme: localStorage.getItem("theme") as Theme };
  }
};

export const defaultState: State = loadTheme();

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const Context = createContext<ContextType>({
  state: defaultState,
  dispatch: () => {},
});
