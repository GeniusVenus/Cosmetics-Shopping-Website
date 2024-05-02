import React from "react";
import UserRow from "./UserRow";
import OrderRow from "./OrderRow";
import "./style.scss";
const TableBody = (props) => {
  const {
    head,
    infos,
    type,
    pageVisited,
    handleFilter,
    handleBan,
    handleEditRole,
    handleView,
    infoPerPage,
  } = props;
  return (
    <table className="content-table">
      <thead>
        <tr>
          {head.map((title, index) => (
            <th key={`content_${index}`}> {title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {infos
          .filter((p) => handleFilter(p))
          .slice(pageVisited, pageVisited + infoPerPage)
          .map((info, index) => {
            if (type === "users") {
              return (
                <UserRow
                  key={`user_${index}`}
                  {...info}
                  handleEditRole={handleEditRole}
                  handleBan={handleBan}
                  handleView={handleView}
                />
              );
            }
            return (
              <OrderRow
                key={`order_${index}`}
                {...info}
                handleView={handleView}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TableBody;
