import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import Filter from "./Filter";
import Dropdown from "./Dropdown";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import { useGetProductsQuery } from "../../features/product/productApiSlice";
const ListProduct = (props) => {
  const listRef = useRef(null);
  const { data, error, isLoading, isError } = useGetProductsQuery();
  const [tempList, setTempList] = useState([]);
  const [products, setProducts] = useState([]);
  const [prevProducts, setPrevProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = props.productPerPage;
  const pageVisited = pageNumber * productPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    listRef.current.scrollIntoView();
  };
  const getMoney = (money) => {
    return parseFloat(money.substring(1));
  };
  useEffect(() => {
    if (!isLoading && !isError) {
      setTempList(data);
      setProducts(data);
    }
  }, [isLoading, isError, data]);
  const handleFilter = (value) => {
    const { brand, price, category } = value;
    const { min, max } = price;
    const isValid = (product) => {
      // if(!gender.includes(product.gender) && gender.length !== 0) return false;
      if (brand.length !== 0 && !brand.includes(product.brand)) return false;
      if (category.length !== 0 && !category.includes(product.category))
        return false;
      const minCost = min === "" ? 0 : parseFloat(min);
      const maxCost = max === "" ? 999999999 : parseFloat(max);
      if (getMoney(product.cost) < minCost || getMoney(product.cost) > maxCost)
        return false;
      return true;
    };
    const newFilterArray = tempList.filter(isValid);
    setPrevProducts(newFilterArray);
    setProducts(newFilterArray);
  };
  const handleSort = (value) => {
    if (!value) {
      setTempList(data);
      if (prevProducts.length !== 0) setProducts(prevProducts);
    }
    if (value === "price") {
      const ascendingSort = (p1, p2) => {
        return getMoney(p1.cost) > getMoney(p2.cost)
          ? 1
          : getMoney(p1.cost) < getMoney(p2.cost)
          ? -1
          : 0;
      };
      const newSortArray = [...products];
      newSortArray.sort(ascendingSort);
      setPrevProducts(products);
      setProducts(newSortArray);
      const newDataArray = [...data];
      newDataArray.sort(ascendingSort);
      setTempList(newDataArray);
    }
  };
  return (
    <>
      <div className="list-product">
        <div className="list-product" ref={listRef}>
          <div className="list-title"> {props.title}</div>
          <div className="list-content">
            <Filter handleFilter={handleFilter} />
            {error || isLoading ? (
              <div className="loading-section">
                <Loading />
              </div>
            ) : (
              <div className="list-product-info">
                <div className="list-product-header">
                  <span>All Products</span>
                  <div className="sort-section">
                    <Dropdown handleSort={handleSort} />
                  </div>
                </div>
                <div className="list-product-content">
                  {products
                    .slice(pageVisited, pageVisited + productPerPage)
                    .map((product, index) => {
                      return <Product key={index} product={product} />;
                    })}
                </div>

                <div className="list-product-pagination">
                  <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                    pageCount={Math.ceil(products.length / productPerPage)}
                    onPageChange={changePage}
                    containerClassName="pagination-section"
                    previousLinkClassName="previous-btn"
                    nextLinkClassName="next-btn"
                    activeClassName="pagination-active"
                  />
                  {props.title !== "All Products" && (
                    <div className="view-all-btn">
                      <Link className="view-all" to="/products">
                        {" "}
                        View all <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
