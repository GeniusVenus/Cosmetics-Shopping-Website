import React from "react";
import PageLocation from "../../components/PageLocation";
import ProductInfo from "../../components/ProductInfo";
import ProductPresent from "../../components/ProductPresent";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useGetProductDetailQuery } from "../../features/product/productApiSlice";
const ProductDetail = (props) => {
  const { id } = useParams();
  const page = [
    { title: "Home", url: "/" },
    { title: "Products (All)", url: "/products" },
    { title: "Product Detail", url: `/products/${id}` },
  ];
  const { data, error, isLoading } = useGetProductDetailQuery(id);
  return (
    <div className="product-detail">
      <PageLocation page={page} />
      {isLoading || error ? (
        <div className="loading-section">
          <Loading />
        </div>
      ) : (
        <>
          {" "}
          <ProductPresent image={data.image} />
          <ProductInfo product={data} />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
