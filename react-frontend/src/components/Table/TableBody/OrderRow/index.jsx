import React from "react";
import TableImage from "../../../../assets/image/TableImage";
import { selectCurrentRoles } from "../../../../features/auth/authSlice";
import { useSelector } from "react-redux";

const { editIcon, deleteIcon } = TableImage;

const OrderRow = (props) => {
  const {
    cartId,
    date,
    orderStatus,
    paymentMethod,
    totalPrice,
    userId,
    handleView,
  } = props;
  const roles = useSelector(selectCurrentRoles);
  console.log(roles);
  return (
    <tr>
      <td>{cartId}</td>
      <td>{userId}</td>
      <td>{date}</td>
      <td>{paymentMethod}</td>
      <td>{totalPrice}</td>
      <td>{orderStatus}</td>
      {roles.includes("ROLE_ADMIN") && (
        <td>
          {" "}
          <div className="item-management">
            <div className="edit-btn" onClick={() => handleView(cartId)}>
              {editIcon}
            </div>
            <div className="delete-btn">{deleteIcon}</div>
          </div>
        </td>
      )}
    </tr>
  );
};
export default OrderRow;
