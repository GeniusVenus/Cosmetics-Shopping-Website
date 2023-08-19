import React from "react";
import { useParams } from "react-router-dom";
import { useGetInfoQuery } from "../../../features/user/userApiSlice";
import Loading from "../../../components/Loading";
import { useGetOrderByUserIdQuery } from "../../../features/order/orderApiSlice";
import Table from "../../../components/Table";
const UserDetail = () => {
  const userId = useParams().id;
  const {
    data: user,
    isLoading: infoLoading,
    isError: infoError,
  } = useGetInfoQuery(userId);
  const {
    data: orders,
    isLoading: ordersLoading,
    isError: ordersError,
  } = useGetOrderByUserIdQuery(userId);
  console.log(user);
  console.log(orders);
  const head = [
    "OrderID",
    "UserID",
    "Order date",
    "Payment method",
    "Total price",
    "Status",
    "",
  ];
  return (
    <>
      <div className="user-detail-page">
        {infoLoading || infoError ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : (
          <div className="user-detail-info">
            <div id="info" className="info-id">
              ID : {user.customerInfo.user.id}{" "}
            </div>
            <div id="info" className="info-first-name">
              First name : {user.customerInfo.firstname}
            </div>
            <div id="info" className="info-last-name">
              Last name : {user.customerInfo.firstname}
            </div>
            <div id="info" className="info-email">
              Email : {user.customerInfo.user.email}
            </div>
            <div id="info" className="info-role">
              Role : {user.customerInfo.user.roles[0].name}
            </div>
            <div id="info" className="info-enable">
              Status :{" "}
              {user.customerInfo.user.isEnable ? "Not banned" : "Banned"}
            </div>
            <div className="info-orders">
              Orders :
              {ordersLoading || ordersError ? (
                <div className="loading-section">
                  <Loading />
                </div>
              ) : (
                <Table type="orders" head={head} infos={orders} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetail;
