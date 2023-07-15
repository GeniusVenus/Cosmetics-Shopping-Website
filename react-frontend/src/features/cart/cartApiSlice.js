import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../api/apiSlice";

// export const cartApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "/post",
//       keepUnusedDataFor: 5,
//     }),
//   }),
// });
export const cartApii = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = cartApii;
