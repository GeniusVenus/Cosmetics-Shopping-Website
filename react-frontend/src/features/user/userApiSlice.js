import { apiSlice } from "../../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    modifyInfo: builder.mutation({
      query: (info) => ({
        url: "/customerinfo/modifyInfo",
        method: "post",
        body: { ...info },
      }),
    }),
    getInfo: builder.query({
      query: (userId) => `/customerinfo/getInfo/${userId}`,
    }),
    getUsers: builder.query({
      query: () => "/user",
    }),
    getUserDetail: builder.query({
      query: (userId) => `/user/${userId}`,
    }),
    editRoles: builder.mutation({
      query: (info) => ({
        url: "/user/editRoles",
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
  useEditRolesMutation,
  useBanUserMutation,
} = userApiSlice;
