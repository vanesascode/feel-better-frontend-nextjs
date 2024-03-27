import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body: { name: string; email: string; password: string }) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
