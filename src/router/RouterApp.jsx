import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { Messages } from "../views/Messages";
import { Help } from "../views/Help";
import { NotFound } from "../views/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import ProtectedRouteHelp from "../components/ProtectedRouteHelp";
import { useThemeContext } from "../context/ThemeContext";

const RouterApp = () => {
  const { contextTheme } = useThemeContext();

  return (
    <div id={contextTheme === "Dark" ? "Dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>}
          />
          <Route path="/help"
            element={
              <ProtectedRouteHelp>
                <Help />
              </ProtectedRouteHelp>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export { RouterApp }