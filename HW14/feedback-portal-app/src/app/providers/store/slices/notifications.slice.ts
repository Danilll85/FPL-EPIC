import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type NotificationType = "success" | "error" | "warning" | "info";

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number; 
  persistent?: boolean; 
  createdAt: string;
}

export interface NotificationState {
  notifications: Notification[];
}

export const initialState: NotificationState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<Omit<Notification, "id" | "createdAt">>) => {
      const notification: Notification = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        duration: action.payload.duration || 5000,
      };
      state.notifications.push(notification);
    },

    hideNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
    },

    clearAllNotifications: (state) => {
      state.notifications = [];
    },

    showSuccess: (state, action: PayloadAction<{ message: string; duration?: number }>) => {
      const notification: Notification = {
        id: crypto.randomUUID(),
        message: action.payload.message,
        type: "success",
        duration: action.payload.duration || 5000,
        createdAt: new Date().toISOString(),
      };
      state.notifications.push(notification);
    },

    showError: (state, action: PayloadAction<{ message: string; persistent?: boolean }>) => {
      const notification: Notification = {
        id: crypto.randomUUID(),
        message: action.payload.message,
        type: "error",
        duration: 7000,
        persistent: action.payload.persistent,
        createdAt: new Date().toISOString(),
      };
      state.notifications.push(notification);
    },

    showWarning: (state, action: PayloadAction<{ message: string; duration?: number }>) => {
      const notification: Notification = {
        id: crypto.randomUUID(),
        message: action.payload.message,
        type: "warning",
        duration: action.payload.duration || 6000,
        createdAt: new Date().toISOString(),
      };
      state.notifications.push(notification);
    },

    showInfo: (state, action: PayloadAction<{ message: string; duration?: number }>) => {
      const notification: Notification = {
        id: crypto.randomUUID(),
        message: action.payload.message,
        type: "info",
        duration: action.payload.duration || 4000,
        createdAt: new Date().toISOString(),
      };
      state.notifications.push(notification);
    },
  },
});

export const {
  showNotification,
  hideNotification,
  clearAllNotifications,
  showSuccess,
  showError,
  showWarning,
  showInfo,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
