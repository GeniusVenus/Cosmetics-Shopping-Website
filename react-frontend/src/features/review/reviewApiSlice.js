import { apiSlice } from "../../api/apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviewDetail: builder.query({
      query: (productId) => `/review/${productId}`,
    }),
    editReview: builder.mutation({
      query: (info) => ({
        url: "/review/editReview",
        method: "post",
        body: { ...info },
      }),
    }),
  }),
});

export const { useGetReviewDetailQuery, useEditReviewMutation } =
  reviewApiSlice;
