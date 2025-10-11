import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("loggedInUser") === "true"

  return loggedInUser ? children : <Navigate to="/" reclace />
}

export default ProtectedRoute