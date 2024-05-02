import { apiSlice } from "../../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    modifyInfo: builder.mutation({
      query: (info) => ({
        url: `/customerinfo/modifyInfo`,
        method: "post",
        body: { ...info },
      }),
      invalidatesTags: ["CustomerInfo"],
    }),
    getInfo: builder.query({
      query: (userId) => `/customerinfo/getInfo/${userId}`,
      providesTags: ["CustomerInfo"],
    }),
    getUsers: builder.query({
      query: () => "/user",
    }),
    getUserDetail: builder.query({
      query: (userId) => `/user/${userId}`,
    }),
    setAdmin: builder.mutation({
      query: (info) => ({
        url: "/user/setAdmin",
        method: "post",
        body: { ...info },
      }),
    }),
    banUser: builder.mutation({
      query: (info) => ({
        url: "/user/banUser",
        method: "post",
        body: { ...info },
      }),
    }),
  }),
});

export const {
  useModifyInfoMutation,
  useGetInfoQuery,
  useGetUsersQuery,
  useGetUserDetailQuery,
  useSetAdminMutation,
  useBanUserMutation,
} = userApiSlice;
