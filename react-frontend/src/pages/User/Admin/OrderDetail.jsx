import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderDetailQuery } from "../../../features/order/orderApiSlice";
import Loading from "../../../components/Loading";
import ErrorDisplay from "../../../components/ErrorDisplay";
const OrderDetail = () => {
  const orderId = useParams().id;
  const { data, isLoading, isError, refetch } = useGetOrderDetailQuery(orderId);
  return (
    <>
      <div className="order-detail-page">
        {isLoading ? (
          <div className="loading-section">
            <Loading />
          </div>
        ) : isError ? (
          <ErrorDisplay refetch={refetch} />
        ) : (
          { orderId }
        )}
      </div>
    </>
  );
};

export default OrderDetail;
