import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "../../api/apiSlice";

// export const cartApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "/post",
//       keepUnusedDataFor: 5,
//     }),
//   }),
// });
export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "product",
    }),
  }),
});

export const { useGetPostsQuery } = cartApi;
