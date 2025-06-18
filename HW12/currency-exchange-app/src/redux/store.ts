import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer, {initialState } from "../modules/data/data.slice";
import { loadStateFromLocaleStorage } from "./loadState";

export interface RootState {
  data: typeof initialState;
}

const preloadedState = loadStateFromLocaleStorage();

export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("notes-state", JSON.stringify(state));
});

export type AppDispatch = typeof store.dispatch;
