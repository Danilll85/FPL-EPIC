import type { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("%cDispatching", "color: blue", action);
  const result = next(action);
  console.log("%cState", "color: green", store.getState());

  return result;
};
