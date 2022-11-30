import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "./AppContextProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useAppContext();
  return isLogin ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
