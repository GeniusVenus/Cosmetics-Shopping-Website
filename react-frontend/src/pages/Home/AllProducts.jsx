import React from "react";
import Advertisement from "../../components/Advertisement";
import ListProduct from "../../components/ListProduct";
import "./style.scss";
import PageLocation from "../../components/PageLocation";
const AllProducts = (props) => {
  const page = [
    { title: "Home", url: "/" },
    { title: "Products (All)", url: "/products" },
  ];
  return (
    <>
      {" "}
      <div className="all-products-layout">
        <PageLocation page={page} />
        <Advertisement />
        <ListProduct
          title="All Products"
          productPerPage={24}
          setData={props.setData}
        />
      </div>
    </>
  );
};

export default AllProducts;
