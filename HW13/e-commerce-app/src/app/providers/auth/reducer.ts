import type { State } from ".";

export type Action = { type: "LOG_IN" } | { type: "LOG_OUT" } | { type: "CHANGE_USERNAME"; value: string };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isAuth: true };
      break;
    case "LOG_OUT":
      return { ...state, isAuth: false };
      break;
    case "CHANGE_USERNAME":
      return { ...state, username: action.value };
    default:
      return state;
  }
};
