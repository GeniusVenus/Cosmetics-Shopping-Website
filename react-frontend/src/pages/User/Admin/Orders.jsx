import React from "react";
import Table from "../../../components/Table";
import "./style.scss";
import Loading from "../../../components/Loading";
import { useGetOrdersQuery } from "../../../features/order/orderApiSlice";
const Orders = () => {
  const head = [
    "OrderID",
    "UserID",
    "Order date",
    "Payment method",
    "Total price",
    "Status",
    "",
  ];
  const { data, isLoading, isError } = useGetOrdersQuery();
  console.log(data);
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
          <Table type="orders" head={head} infos={data} />
        )}
      </div>{" "}
    </>
  );
};

export default Orders;
