import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthed } from "./auth";

export default function RequireAuth() {
  const location = useLocation();

  if (!isAuthed()) {
    return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}
