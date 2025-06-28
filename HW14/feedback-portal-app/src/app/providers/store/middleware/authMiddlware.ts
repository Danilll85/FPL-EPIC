import type { Middleware } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../store";

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const isAuth = store.getState().auth.isAuth;
  console.log(isAuth);

  if (
    typeof (action as { type: unknown }).type === "string" &&
    (action as { type: string }).type.startsWith("feedback/") &&
    !isAuth
  ) {
    console.warn("Unathorized action was blocked");

    return;
  }

  return next(action);
};

//const protectedFeedbackActions = ["feedback/addFeedback"];
