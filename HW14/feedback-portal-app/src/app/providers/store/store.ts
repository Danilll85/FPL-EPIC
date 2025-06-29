import { configureStore } from "@reduxjs/toolkit";
import feedbackSliceReducer from "./slices/feedback.slice";
import authSliceReducer from "./slices/auth.slice";
import departmentReducer from "./slices/departments.slice";
import { authMiddleware } from "./middleware/authMiddlware";
import { logger } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    feedback: feedbackSliceReducer,
    auth: authSliceReducer,
    departments: departmentReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;