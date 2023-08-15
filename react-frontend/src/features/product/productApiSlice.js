import { apiSlice } from "../../api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
    }),
    getProductDetail: builder.query({
      query: (productId) => `/product/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } =
  productApiSlice;
