import {  configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "../modules/data/data.slice"


export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
  },
});
