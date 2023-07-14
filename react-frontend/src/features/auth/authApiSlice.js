import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "post",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "post",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
