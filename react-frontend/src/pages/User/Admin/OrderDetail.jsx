import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderDetailQuery } from "../../../features/order/orderApiSlice";

const OrderDetail = () => {
  const orderId = useParams().id;
  return (
    <>
      <div className="order-detail-page"></div>
    </>
  );
};

export default OrderDetail;
