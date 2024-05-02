import React, { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  useBanUserMutation,
  useSetAdminMutation,
} from "../../features/user/userApiSlice";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";
import "./style.scss";
const Table = (props) => {
  const { type, head, infos, listFilter } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const [infoPerPage, setInfoPerPage] = useState(10);
  const [filterOption, setFilterOption] = useState(listFilter[0]);
  const [searchValue, setSearchValue] = useState("");
  const pageVisited = useMemo(
    () => pageNumber * infoPerPage,
    [pageNumber, infoPerPage]
  );
  const tableRef = useRef();
  const navigate = useNavigate();
  const [ban] = useBanUserMutation();
  const [setAdmin] = useSetAdminMutation();
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    tableRef.current.scrollIntoView();
  };
  const handleView = (id) => {
    navigate(`/${type}/${id}`);
  };
  const handleFilter = (p) => {
    if (filterOption === "ID") return p.id.includes(searchValue);
    else if (filterOption === "Name") return p.username.includes(searchValue);
    else if (filterOption === "Email") return p.email.includes(searchValue);
    else if (filterOption === "OrderID") return p.cartId.includes(searchValue);
    else if (filterOption === "UserID") return p.userId.includes(searchValue);
    else if (filterOption === "Order date") return p.date.includes(searchValue);
    else if (filterOption === "Payment method")
      return p.paymentMethod.includes(searchValue);
    else if (filterOption === "Status")
      return p.orderStatus.includes(searchValue);
    return false;
  };
  const handleBan = async (id) => {
    try {
      await ban({ id });
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditRole = async (id) => {
    try {
      await setAdmin({ id });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="table-section" ref={tableRef}>
        <div className="table-number-data">{infos.length} entries found</div>
        {/* Table Header */}
        <TableHeader
          listFilter={listFilter}
          type={type}
          filterOption={filterOption}
          setFilterOption={setFilterOption}
          setSearchValue={setSearchValue}
        />
        {/* Table Body */}
        <TableBody
          head={head}
          infos={infos}
          type={type}
          pageVisited={pageVisited}
          infoPerPage={infoPerPage}
          handleEditRole={handleEditRole}
          handleFilter={handleFilter}
          handleBan={handleBan}
          handleView={handleView}
        />
        {/* Table Footer */}
        <TableFooter
          setInfoPerPage={setInfoPerPage}
          infos={infos}
          searchValue={searchValue}
          infoPerPage={infoPerPage}
          handleFilter={handleFilter}
          changePage={changePage}
        />
      </div>
    </>
  );
};

export default Table;
