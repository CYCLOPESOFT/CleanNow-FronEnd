import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  useRegister: false,
  email: null,
  statusCode: 0,
  code: 0,
  messageError: null,
  emailConfirm: false,
  phone: 0,
  register: false,
  authenticate: false,
  user: null,
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
        state.statusCode = action.payload.data.statusCode;
        state.useRegister = true;
        state.email = action.payload.email;
        state.code = action.payload.data.code;
      } else {
        state.useRegister = false;
        state.email = null;
        state.code = 0;
        state.statusCode = 0;
      }
    },
    setAuth: (state, action) => {
      state.authenticate = true;
    },
    setSign: (state, action) => {
      if (state.code === action.payload.code) {
        state.user = action.payload.sign.data;
        localStorage.setItem(
          "userInfo",
          JSON.stringify(action.payload.sign.data)
        );
      }
    },
    setStatusCode: (state, action) => {
      state.statusCode = action.payload.error.status;
      state.messageError = action.payload.error.data.error;
    },
    setEmailConfirm: (state, action) => {
      if (state.code === action.payload) {
        state.emailConfirm = true;
      }
    },
    setPhone: (state, action) => {
      state.phone = action.payload.selectedCountry + action.payload.number;
    },
    setStateRegister: (state, action) => {
      state.register = true;
    },
  },
});

export const {
  setCredentials,
  setRegister,
  setStatusCode,
  setEmailConfirm,
  setPhone,
  setStateRegister,
  setAuth,
  setSign,
} = authSlice.actions;

export default authSlice.reducer;
