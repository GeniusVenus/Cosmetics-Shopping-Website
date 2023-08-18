import { apiSlice } from "../../api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
    }),
    getOrderDetail: builder.query({
      query: (orderId) => `/orders/${orderId}`,
    }),
  }),
});

export const { useGetOrderDetailQuery, useGetOrdersQuery } = orderApiSlice;
