import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Slices/apiSlice";
import authReducer from "../Slices/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
