import { useContext } from "react";
import { Context } from "../../../app/providers/theme";
import type { ContextType } from "../../../app/providers/theme/index";

export const useTheme = () => {
  const context = useContext<ContextType>(Context);

  return {
    theme: context.state.theme,
    dispatch: () => context.dispatch({ type: "CHANGE_THEME" }),
  };
};