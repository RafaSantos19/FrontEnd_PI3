// service/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Confirma se o token está armazenado
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
