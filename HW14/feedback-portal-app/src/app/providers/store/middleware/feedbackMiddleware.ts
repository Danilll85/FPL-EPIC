import type { Middleware } from "@reduxjs/toolkit";

const FEEDBACK_KEY = "feedback_data";

export const feedbackMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    typeof (action as { type: unknown }).type === "string" &&
    (action as { type: string }).type.startsWith("feedback/")
  ) {
    try {
      const state = store.getState();
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(state.feedback.feedbacks));
      console.log("Feedback saved to localStorage:", state.feedback.feedbacks);
    } catch (error) {
      console.error("Error saving feedback to localStorage:", error);
    }
  }

  return result;
};
