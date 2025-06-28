import { configureStore } from "@reduxjs/toolkit";
import feedbackSliceReducer from "./slices/feedback.slice";
import authSliceReducer from "./slices/auth.slice";
import { authMiddleware } from "./middleware/authMiddlware";
import { logger } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    feedback: feedbackSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//Block feedback-related actions via middleware if user is not logged in