import type { State } from ".";

export type Action = { type: "LOG_IN" } | { type: "LOG_OUT" };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isAuth: true };
      break;
    case "LOG_OUT":
      return { ...state, isAuth: false };
      break;
    default:
      return state;
  }
};
