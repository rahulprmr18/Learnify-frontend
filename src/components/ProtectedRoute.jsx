import React from "react";
import { Navigate } from "react-router-dom";
import { UserData } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = UserData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;