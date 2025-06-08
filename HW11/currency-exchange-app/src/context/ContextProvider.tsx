import { useEffect, useState, type ContextType, type PropsWithChildren } from "react";
import { Context, defaultState } from ".";

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("appState");

    if (saved) {
      return JSON.parse(saved);
    } else {
      localStorage.setItem("appState", JSON.stringify(defaultState));
      return defaultState;
    }
  });

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};
