import React from "react";
import Table from "../../../components/Table";
import "./style.scss";
import Loading from "../../../components/Loading";
import { useGetUsersQuery } from "../../../features/user/userApiSlice";
import ErrorDisplay from "../../../components/ErrorDisplay";
const head = ["ID", "Name", "Email", ""];
const listFilter = ["ID", "Name", "Email"];
const Users = () => {
  // const { data, isLoading, isError, refetch } = useGetUsersQuery();
  const data = [
    {
      id: "1",
      username: "GeniusVenus",
      email: "ducthangnguyen666@gmail.com",
      enable: true,
      roles: ["ROLE_USER", "ROLE_ADMIN"],
    },
    {
      id: "2",
      username: "Nogoilachangmaykhi",
      email: "nguyen666@gmail.com",
      enable: true,
      roles: ["ROLE_USER"],
    },
    {
      id: "3",
      username: "Lychee",
      email: "thangnguyen666@gmail.com",
      enable: true,
      roles: ["ROLE_USER"],
    },
    {
      id: "4",
      username: "Yessir",
      email: "hangnguyen666@gmail.com",
      enable: true,
      roles: ["ROLE_USER", "ROLE_ADMIN"],
    },
  ];
  return (
    <>
      {" "}
      <div className="users-page">
        {/* {" "}
        {isLoading ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : isError ? (
          <ErrorDisplay refetch={refetch} />
        ) : ( */}
        <Table type="users" listFilter={listFilter} head={head} infos={data} />
      </div>{" "}
    </>
  );
};

export default Users;
