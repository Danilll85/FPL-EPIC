import { type State } from ".";

export type Action = {
  type: "CHANGE_THEME";
};

export const reducer = (state: State, action: Action): State => {
  if (action.type === "CHANGE_THEME") {
    localStorage.setItem('theme', state.theme === "light" ? "dark" : "light");
    return { ...state, theme: state.theme === "light" ? "dark" : "light" };
  }

  return state;
};
