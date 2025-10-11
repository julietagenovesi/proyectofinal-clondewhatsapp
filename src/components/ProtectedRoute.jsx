import { Navigate } from "react-router-dom";

/* Protegiendo la ruta del chat */

const ProtectedRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("loggedInUser") === "true"

  return loggedInUser ? children : <Navigate to="/" replace />
}

export default ProtectedRoute