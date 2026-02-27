import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import LoginForm from "../../../05_features/LoginForm/LoginForm";
import RegisterForm from "../../../05_features/RegisterForm/RegisterForm";


const router = createBrowserRouter([
    {
    path: "/",
    index: true, // Этот маршрут срабатывает только для точного совпадения "/"
    element: <Navigate to="/login" replace />, // Редирект
  },
  {
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/register",
    element: <RegisterForm/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}