import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "post",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "post",
        body: { ...credentials },
      }),
    }),
    signout: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signout",
        method: "post",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useSignoutMutation } =
  authApiSlice;
