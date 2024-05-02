import React from "react";
import Table from "../../../components/Table";
import "./style.scss";
import Loading from "../../../components/Loading";
import { useGetOrdersQuery } from "../../../features/order/orderApiSlice";
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
const Orders = () => {
  // const { data, isLoading, isError, refetch } = useGetOrdersQuery();
  const data = [
    {
      cartId: "100",
      date: "05/02/2023",
      orderStatus: "Pending",
      paymentMethod: "VISA",
      totalPrice: 900,
      userId: "43",
    },
  ];
  return (
    <>
      <div className="orders-page">
        {/* {isLoading ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : isError ? (
          <ErrorDisplay refetch={refetch} />
        ) : ( */}
        <Table listFilter={listFilter} type="orders" head={head} infos={data} />
        {/* )} */}
      </div>
    </>
  );
};

export default Orders;
