import { useContext } from "react";
import { Context } from "../../../app/providers/context";
import type { ContextType } from "../../../app/providers/context/index";

export const useTheme = () => {
  const context = useContext<ContextType>(Context);

  return {
    theme: context.state.theme,
    dispatch: () => context.dispatch({ type: "CHANGE_THEME" }),
  };
};