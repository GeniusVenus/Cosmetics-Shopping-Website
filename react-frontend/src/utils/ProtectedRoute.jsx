import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentRoles,
} from "../features/auth/authSlice";

const ProtectedRoute = ({ isLoggedIn, allowedRole }) => {
  const token = useSelector(selectCurrentToken);
  const roles = useSelector(selectCurrentRoles);
  if (isLoggedIn && !token) return <Navigate to="/login" replace />;
  if (!isLoggedIn && token) return <Navigate to="/" replace />;
  if (!roles.includes(allowedRole) && allowedRole)
    return <Navigate to="/404" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
