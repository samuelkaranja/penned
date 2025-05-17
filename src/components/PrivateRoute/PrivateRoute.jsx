// components/PrivateRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const PrivateRoute = ({ children }) => {
  const { accessToken } = useContext(GlobalContext);

  return accessToken ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
