import { configureStore } from "@reduxjs/toolkit";
import feedbackSliceReducer from "./slices/feedback.slice";
import authSliceReducer from "./slices/auth.slice";
import departmentReducer from "./slices/departments.slice";
import notificationsReducer from "./slices/notifications.slice";
import { authMiddleware } from "./middleware/authMiddlware";
import { logger } from "./middleware/logger";
import { feedbackMiddleware } from "./middleware/feedbackMiddleware";
import { loadFeedbackFromStorage } from "./utils/localeStorage";
import { apiLoggingMiddleware } from "./middleware/apiLoggingMiddleware";
import { notificationsMiddleware } from "./middleware/notificationsMiddleware";

const preloadedState = {
  feedback: loadFeedbackFromStorage(),
};

export const store = configureStore({
  reducer: {
    feedback: feedbackSliceReducer,
    auth: authSliceReducer,
    departments: departmentReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(authMiddleware)
      .concat(feedbackMiddleware)
      .concat(apiLoggingMiddleware)
      .concat(notificationsMiddleware),
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
