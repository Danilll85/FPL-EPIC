import { useReducer, type PropsWithChildren } from "react";
import { Context, defaultState } from ".";
import { reducer } from "./reducer";

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
