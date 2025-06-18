import { initialState } from "../modules/data/data.slice";
import type { RootState } from "./store";

export const loadStateFromLocaleStorage = (): RootState => {
  const state = localStorage.getItem("notes-state");
    console.log('here', state);
    
  if (state) {
    console.log(JSON.parse(state));
    
    return JSON.parse(state);
  } else {
    localStorage.setItem("notes-state", JSON.stringify(initialState));
    return {data: initialState};
  }
};
