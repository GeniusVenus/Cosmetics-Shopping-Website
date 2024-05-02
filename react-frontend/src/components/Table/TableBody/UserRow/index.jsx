import React from "react";
import TableImage from "../../../../assets/image/TableImage";
import { selectCurrentRoles } from "../../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faUser,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

const { editIcon, banIcon } = TableImage;
const UserRow = (props) => {
  const { id, username, email, enable, handleView, handleEditRole, handleBan } =
    props;
  const roles = useSelector(selectCurrentRoles);
  const isAdmin = roles.includes("ROLE_ADMIN");
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {" "}
        <div className="item-management">
          <div className="edit-btn" onClick={() => handleView(id)}>
            {editIcon}
          </div>

          <div
            className={isAdmin ? "downgrade-btn" : "upgrade-btn"}
            onClick={() => handleEditRole(id)}
          >
            {" "}
            <FontAwesomeIcon icon={isAdmin ? faUserXmark : faUser} />{" "}
          </div>

          <div
            className={enable ? "ban-btn" : "unban-btn"}
            onClick={() => handleBan(id)}
          >
            {enable ? banIcon : <FontAwesomeIcon icon={faLockOpen} />}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
