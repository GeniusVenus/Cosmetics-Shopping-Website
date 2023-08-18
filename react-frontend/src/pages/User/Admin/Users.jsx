import React from "react";
import Table from "../../../components/Table";
import "./style.scss";
import Loading from "../../../components/Loading";
import { useGetUsersQuery } from "../../../features/user/userApiSlice";
const Users = () => {
  const head = ["ID", "Name", "Email", ""];
  const { data, isLoading, isError } = useGetUsersQuery();
  return (
    <>
      {" "}
      <div className="users-page">
        {" "}
        {isLoading || isError ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : (
          <Table type="users" head={head} infos={data} />
        )}
      </div>{" "}
    </>
  );
};

export default Users;
