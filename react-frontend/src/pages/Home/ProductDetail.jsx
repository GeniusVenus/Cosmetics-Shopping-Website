import React from "react";
import PageLocation from "../../components/PageLocation";
import ProductInfo from "../../components/ProductInfo";
import ProductPresent from "../../components/ProductPresent";
const ProductDetail = () => {
  const page = [
    { title: "Home", url: "/" },
    { title: "Products (All)", url: "/products" },
    { title: "Product Detail", url: "/products/1" },
  ];
  const product = {
    title: "The Ordinary Niacinamide 10% Serum",
    product_type: "Skincare",
    price: 100000,
    volume: "30 ml | 1.0 US fl.oz",
    ingredients: "Water, Niacinamide (10%)",
    brand: "The Ordinary",
    type: "Serum",
    description:
      "Niacinamide also possesses anti-inflammatory properties, making it a fantastic choice for those with acne-prone skin. ",
  };
  return (
    <div className="product-detail">
      <PageLocation page={page} />
      <ProductPresent />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetail;
