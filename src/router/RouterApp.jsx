import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { Messages } from "../views/Messages";
import { NotFound } from "../views/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import { ModeComponent } from "../context/ModeContext";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <ModeComponent>
          <Route path="/chat"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>}
          />
        </ModeComponent>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }