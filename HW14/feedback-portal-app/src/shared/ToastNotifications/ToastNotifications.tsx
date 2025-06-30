import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../app/providers/store/store";
import { hideNotification } from "../../app/providers/store/slices/notifications.slice";
import type { Notification } from "../../app/providers/store/slices/notifications.slice";

const ToastNotifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  useEffect(() => {
    notifications.forEach((notification) => {
      if (!notification.persistent && notification.duration) {
        const timer = setTimeout(() => {
          dispatch(hideNotification(notification.id));
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, dispatch]);

  const handleClose = (id: string) => {
    dispatch(hideNotification(id));
  };

  const getNotificationStyles = (type: Notification["type"]) => {
    const baseStyles = {
      position: "relative" as const,
      padding: "12px 16px",
      marginBottom: "8px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: "300px",
      maxWidth: "500px",
      animation: "slideIn 0.3s ease-out",
    };

    const typeStyles = {
      success: {
        backgroundColor: "#d4edda",
        color: "#155724",
        border: "1px solid #c3e6cb",
      },
      error: {
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
      },
      warning: {
        backgroundColor: "#fff3cd",
        color: "#856404",
        border: "1px solid #ffeaa7",
      },
      info: {
        backgroundColor: "#d1ecf1",
        color: "#0c5460",
        border: "1px solid #bee5eb",
      },
    };

    return { ...baseStyles, ...typeStyles[type] };
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "📢";
    }
  };

  if (notifications.length === 0) return null;

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            pointer-events: none;
          }
          
          .toast-notification {
            pointer-events: auto;
            cursor: pointer;
            transition: transform 0.2s ease;
          }
          
          .toast-notification:hover {
            transform: translateX(-5px);
          }
          
          .close-button {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            opacity: 0.7;
            margin-left: 12px;
            padding: 0;
            line-height: 1;
          }
          
          .close-button:hover {
            opacity: 1;
          }
        `}
      </style>

      <div className="toast-container">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="toast-notification"
            style={getNotificationStyles(notification.type)}
            onClick={() => handleClose(notification.id)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{getIcon(notification.type)}</span>
              <span>{notification.message}</span>
            </div>
            <button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                handleClose(notification.id);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToastNotifications;
