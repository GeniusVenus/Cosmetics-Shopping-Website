import React, { useState, useRef } from "react";
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
  const { data, error, isLoading } = useGetProductsQuery();
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = props.productPerPage;
  const pageVisited = pageNumber * productPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    listRef.current.scrollIntoView();
  };
  console.log(data);
  const handleFilter = (value) => {
    console.log(value);
  };
  const handleSort = (value) => {
    console.log(value);
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
                <div
                  className="list-product-content"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  {data
                    .slice(pageVisited, pageVisited + productPerPage)
                    .map((product, index) => {
                      return <Product key={index} product={product} />;
                    })}
                </div>

                <div className="list-product-pagination">
                  <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                    pageCount={Math.ceil(data.length / productPerPage)}
                    onPageChange={changePage}
                    containerClassName="pagination-section"
                    previousLinkClassName="previous-btn"
                    nextLinkClassName="next-btn"
                    activeClassName="pagination-active"
                  />
                  {props.title !== "All Products" && (
                    <div className="view-all-btn">
                      <Link className="view-all" to="/data">
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
