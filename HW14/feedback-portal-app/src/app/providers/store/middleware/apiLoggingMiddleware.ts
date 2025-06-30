import type { Middleware } from "@reduxjs/toolkit";

const sendLogToApi = async (logData: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.15;

      if (success) {
        console.log("📡 API Log sent to /api/log:", logData);
        resolve();
      } else {
        console.error("🚫 API Log failed:", logData);
        reject(new Error("API logging failed"));
      }
    }, 800 + Math.random() * 1200);
  });
};

export const apiLoggingMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    typeof (action as { type: unknown }).type === "string" &&
    ((action as { type: string }).type === "feedback/addFeedback" ||
      (action as { type: string }).type === "feedback/editFeedback")
  ) {
    const actionType = (action as { type: string }).type;
    const payload = (action as { payload: any }).payload;

    const apiLogData = {
      timestamp: new Date().toISOString(),
      event: actionType.replace("feedback/", ""),
      feedbackId: actionType === "feedback/addFeedback" ? payload.id : payload.id,
      data:
        actionType === "feedback/addFeedback"
          ? {
              message: payload.message,
              department: payload.department,
              createdAt: payload.createdAt,
            }
          : {
              id: payload.id,
              changes: payload.changes,
            },
      source: "feedback-app",
      version: "1.0.0",
    };

    sendLogToApi(apiLogData)
      .then(() => {
        console.log(`✅ ${actionType} successfully logged to API`);
      })
      .catch((error) => {
        console.error(`❌ Failed to log ${actionType} to API:`, error.message);
      });
  }

  return result;
};
