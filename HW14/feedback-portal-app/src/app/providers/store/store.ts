import { configureStore } from "@reduxjs/toolkit";
import feedbackSliceReducer from "./slices/feedback.slice";

export const store = configureStore({
  reducer: {
    feedback: feedbackSliceReducer,
  },
});
