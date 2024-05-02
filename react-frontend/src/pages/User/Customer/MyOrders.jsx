import React from "react";
import Table from "../../../components/Table";
import "./style.scss";
import Loading from "../../../components/Loading";
import { useSelector } from "react-redux";
import { useGetOrderByUserIdQuery } from "../../../features/order/orderApiSlice";
import { selectCurrentUserId } from "../../../features/auth/authSlice";
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
const MyOrders = () => {
  const userId = useSelector(selectCurrentUserId);
  const { data, isLoading, isError } = useGetOrderByUserIdQuery(userId);
  return (
    <>
      {" "}
      <div className="orders-page">
        {" "}
        {isLoading || isError ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : (
          <Table
            listFilter={listFilter}
            type="orders"
            head={head}
            infos={data}
          />
        )}
      </div>{" "}
    </>
  );
};

export default MyOrders;
