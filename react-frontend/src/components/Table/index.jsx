import React, { useState, useRef } from "react";
import "./style.scss";
import TableImage from "../../assets/image/TableImage";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
const Table = (props) => {
  const { searchIcon, filterIcon, settingIcon, editIcon, banIcon, deleteIcon } =
    TableImage;
  const [pageNumber, setPageNumber] = useState(0);
  const [infoPerPage, setInfoPerPage] = useState(10);
  const pageVisited = pageNumber * infoPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    tableRef.current.scrollIntoView();
  };
  const tableRef = useRef();
  const navigate = useNavigate();
  const { type, head, infos } = props;
  const [data, setData] = useState(infos);
  const handleView = (id) => {
    if (type === "users") {
      navigate(`/users/${id}`);
    } else if (type === "orders") {
      navigate(`/orders/${id}`);
    }
  };
  return (
    <>
      <div className="table-section" ref={tableRef}>
        <div className="table-number-data">{data.length} entries found</div>
        <div className="table-header">
          <div className="first-section">
            <div className="search-btn">{searchIcon}</div>
            <div className="filter-btn">
              {filterIcon} <p> Filter</p>
            </div>
          </div>
          <div className="second-section">
            <div className="setting-btn"> {settingIcon}</div>
          </div>
        </div>
        <table className="content-table">
          <thead>
            <tr>
              {head.map((title, index) => (
                <th key={index}> {title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              .slice(pageVisited, pageVisited + infoPerPage)
              .map((info, index) => {
                if (type === "users") {
                  const { id, username, email } = info;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>
                        {" "}
                        <div className="item-management">
                          <div
                            className="edit-btn"
                            onClick={() => handleView(id)}
                          >
                            {editIcon}
                          </div>
                          <div className="ban-btn">{banIcon}</div>
                        </div>
                      </td>
                    </tr>
                  );
                } else if (type === "orders") {
                  const {
                    cartId,
                    date,
                    orderStatus,
                    paymentMethod,
                    totalPrice,
                    userId,
                  } = info;
                  return (
                    <tr key={index}>
                      <td>{cartId}</td>
                      <td>{userId}</td>
                      <td>{date}</td>
                      <td>{paymentMethod}</td>
                      <td>{totalPrice}</td>
                      <td>{orderStatus}</td>
                      <td>
                        {" "}
                        <div className="item-management">
                          <div
                            className="edit-btn"
                            onClick={() => handleView(cartId)}
                          >
                            {editIcon}
                          </div>
                          <div className="delete-btn">{deleteIcon}</div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
        <div className="table-footer">
          <div className="table-num-row">
            <Dropdown setInfoPerPage={setInfoPerPage} />
            <div className="description">Entries per page</div>
          </div>
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            pageCount={Math.ceil(data.length / infoPerPage)}
            onPageChange={changePage}
            containerClassName="pagination-section"
            previousLinkClassName="previous-btn"
            nextLinkClassName="next-btn"
            activeClassName="pagination-active"
          />
        </div>
      </div>
    </>
  );
};

export default Table;
