import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserDetailQuery } from "../../../features/user/userApiSlice";
import Loading from "../../../components/Loading";
import { useGetOrderByUserIdQuery } from "../../../features/order/orderApiSlice";
import Table from "../../../components/Table";
import ErrorDisplay from "../../../components/ErrorDisplay";
const head = [
  "OrderID",
  "UserID",
  "Order date",
  "Payment method",
  "Total price",
  "Status",
  "",
];
const listFilter = [
  "OrderID",
  "UserID",
  "Order date",
  "Payment method",
  "Status",
];
const UserDetail = () => {
  const userId = useParams().id;
  const {
    data: user,
    isLoading: infoLoading,
    isError: infoError,
    refetch: refetchUser,
  } = useGetUserDetailQuery(userId);
  const {
    data: orders,
    isLoading: ordersLoading,
    isError: ordersError,
    refetch: refetchOrder,
  } = useGetOrderByUserIdQuery(userId);
  console.log(user);
  console.log(orders);
  return (
    <>
      <div className="user-detail-page">
        {infoLoading ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : infoError ? (
          <ErrorDisplay refetch={refetchUser} />
        ) : (
          <div className="user-detail-info">
            <div id="info" className="info-id">
              ID : {user.id}{" "}
            </div>
            <div id="info" className="info-first-name">
              First name : {user.firstname}
            </div>
            <div id="info" className="info-last-name">
              Last name : {user.lastname}
            </div>
            <div id="info" className="info-email">
              Email : {user.email}
            </div>
            <div id="info" className="info-role">
              Roles :{" "}
              {user.roles.map((role, index) => {
                if (index !== user.roles.length - 1) return role.name + ", ";
                return role.name;
              })}
            </div>
            <div id="info" className="info-enable">
              Status : {user.enable ? "Not banned" : "Banned"}
            </div>
            <div className="info-orders">
              Orders :
              {ordersLoading ? (
                <div className="loading-section">
                  <Loading />
                </div>
              ) : ordersError ? (
                <ErrorDisplay refetch={refetchOrder} />
              ) : (
                <Table
                  listFilter={listFilter}
                  type="orders"
                  head={head}
                  infos={orders}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetail;
