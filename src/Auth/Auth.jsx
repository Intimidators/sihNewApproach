import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ element, Role }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    return <Navigate replace to="/error" />;
  }
  if (Role && user.role !== Role) {
    return <Navigate replace to="/error" />;
  }
  return element;
};

export default ProtectedRoutes;
