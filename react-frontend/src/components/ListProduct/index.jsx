import React, { useState } from "react";
import "./style.scss";
import Filter from "./Filter";
import Dropdown from "./Dropdown";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import JsonData from "./test.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const ListProduct = () => {
  const [products, setProducts] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const pageVisited = pageNumber * productPerPage;
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => setPageNumber(selected);
  const handleFilter = (value) => {
    console.log(value);
  };
  const handleSort = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="list-product">
        <motion.div
          className="list-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {" "}
          Featured this weekend
        </motion.div>
        <div className="list-content">
          <Filter handleFilter={handleFilter} />
          <div className="list-product-info">
            <motion.div
              className="list-product-header"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <span>All Products</span>
              <div className="sort-section">
                <Dropdown handleSort={handleSort} />
              </div>
            </motion.div>
            <motion.div
              className="list-product-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              {products
                .slice(pageVisited, pageVisited + productPerPage)
                .map((product, index) => {
                  return <Product key={index} product={product} />;
                })}
            </motion.div>
          </div>
        </div>
        <div className="list-product-pagination">
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
            nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="pagination-section"
            previousLinkClassName="previous-btn"
            nextLinkClassName="next-btn"
            activeClassName="pagination-active"
          />
          <div className="view-all-btn">
            <div className="view-all">
              {" "}
              View all <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
