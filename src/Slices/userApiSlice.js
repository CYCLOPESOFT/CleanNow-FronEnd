import { apiSlice } from "./apiSlice";

const USER_URL = "/api/Account";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    sendCode: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/generate-code`,
        method: "POST",
        body: data,
      }),
    }),
    registrate: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/authenticate`,
        method:"POST",
        body:data
      }),
    }),
  }),
});

export const { useLoginMutation, useSendCodeMutation, useRegistrateMutation,useSignInMutation } = usersApiSlice;
