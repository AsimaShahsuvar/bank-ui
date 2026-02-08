import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import AppLayouts from "../layouts/AppLayouts";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import RequireAuth from "../auth/RequireAuth";


function NotFound() {
  return <div style={{ padding: 24 }}>404 - Not Found</div>;
}

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/auth/login" replace /> },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "login", element: <Login /> }],
  },

  {
    path: "/app",
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayouts />,
        children: [{ path: "dashboard", element: <Dashboard /> }],
      },
    ],
  },
  

  { path: "*", element: <NotFound /> },
]);
