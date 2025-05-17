import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const PublicRoute = ({ children }) => {
  const { accessToken } = useContext(GlobalContext);

  return accessToken ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
