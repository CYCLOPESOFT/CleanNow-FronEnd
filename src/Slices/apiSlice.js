import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://localhost:7245" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // getUser: builder.query({
    //     query: (id) => `users/${id}`,
    //     providesTags: ['User']
    // }),
    // createUser: builder.mutation({
    //     query: (body) => ({
    //         url: 'users',
    //         method: 'POST',
    //         body
    //     }),
    //     invalidatesTags: ['User']
    // }),
    // updateUser: builder.mutation({
    //     query: (body) => ({
    //         url: 'users',
    //         method: 'PUT',
    //         body
    //     }),
    //     invalidatesTags: ['User']
    // }),
    // deleteUser: builder.mutation({
    //     query: (id) => ({
    //         url: `users/${id}`,
    //         method: 'DELETE'
    //     }),
    //     invalidatesTags: ['User']
    // })
  }),
});
