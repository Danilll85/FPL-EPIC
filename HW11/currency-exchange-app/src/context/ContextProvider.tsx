import { useState, type ContextType, type PropsWithChildren } from "react";
import { Context, defaultState } from ".";

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(defaultState);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};
