import { configureStore } from "@reduxjs/toolkit";
import { months } from "../utils/calendarUtils";

type State = {
  month: string;
  year: number;
};

export type ChangeMonthAction = {
  type: "changeMonth";
  value: string;
};

export type ChangeYearAction = {
  type: "changeYear";
  value: number;
};

type Action = ChangeMonthAction | ChangeYearAction;

const initialState: State = {
  month: months[new Date().getMonth()],
  year: new Date().getFullYear(),
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "changeMonth":
      return {
        ...state,
        month: action.value,
      };
    case "changeYear":
      return {
        ...state,
        year: action.value,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
// store.dispatch
// store.getState
// store.subscribe
