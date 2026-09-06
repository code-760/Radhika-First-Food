import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/state/api.slice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});