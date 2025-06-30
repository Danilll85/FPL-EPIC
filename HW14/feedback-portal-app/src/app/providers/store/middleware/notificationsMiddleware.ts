import type { Middleware } from "@reduxjs/toolkit";
import { showSuccess, showError, showWarning, showInfo } from "../slices/notifications.slice";

export const notificationsMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (typeof (action as { type: unknown }).type === "string") {
    const actionType = (action as { type: string }).type;

    switch (actionType) {
      case "feedback/addFeedback":
        store.dispatch(
          showSuccess({
            message: "Feedback submitted successfully!",
            duration: 4000,
          })
        );
        break;

      case "feedback/editFeedback":
        store.dispatch(
          showSuccess({
            message: "Feedback updated successfully!",
            duration: 3000,
          })
        );
        break;

      case "feedback/deleteFeedback":
        store.dispatch(
          showWarning({
            message: "Feedback deleted",
            duration: 3000,
          })
        );
        break;

      case "departments/fetchDepartments/pending":
        store.dispatch(
          showInfo({
            message: "Loading departments...",
            duration: 2000,
          })
        );
        break;

      case "departments/fetchDepartments/fulfilled":
        const departmentsCount = (action as any).payload?.length || 0;
        store.dispatch(
          showSuccess({
            message: `${departmentsCount} departments loaded successfully`,
            duration: 3000,
          })
        );
        break;

      case "departments/fetchDepartments/rejected":
        const errorMessage = (action as any).error?.message || "Failed to load departments";
        store.dispatch(
          showError({
            message: `Error: ${errorMessage}`,
            persistent: true,
          })
        );
        break;

      case "auth/setAuth":
        const isAuth = (action as any).payload;
        if (isAuth) {
          store.dispatch(
            showSuccess({
              message: "Successfully logged in!",
              duration: 3000,
            })
          );
        } else {
          store.dispatch(
            showInfo({
              message: "Logged out",
              duration: 2000,
            })
          );
        }
        break;

      case "apiLog/success":
        store.dispatch(
          showInfo({
            message: "Activity logged successfully",
            duration: 2000,
          })
        );
        break;

      case "apiLog/failure":
        store.dispatch(
          showWarning({
            message: "Failed to log activity",
            duration: 3000,
          })
        );
        break;
    }
  }

  return result;
};
