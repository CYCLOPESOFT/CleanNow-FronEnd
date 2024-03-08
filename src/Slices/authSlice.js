import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  useRegister: false,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.data.response.user)
      );
    },
    setRegister: (state, action) => {
      if (state.useRegister === false) {
        state.useRegister = true;
        state.email = action.payload.email;
      } else {
        state.useRegister = false;
        state.email = null;
      }
    },
  },
});

export const { setCredentials, setRegister } = authSlice.actions;

export default authSlice.reducer;
