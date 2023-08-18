import { apiSlice } from "../../api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/cart/orders",
    }),
    getOrderDetail: builder.query({
      query: (orderId) => `cart/orders/${orderId}`,
    }),
    getOrderByUserId: builder.query({
      query: (userId) => `cart/orders/userId/${userId}`
    })
  }),
});

export const { useGetOrderDetailQuery, useGetOrdersQuery, useGetOrderByUserIdQuery } = orderApiSlice;
