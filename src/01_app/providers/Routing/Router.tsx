import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import LoginPage from "../../../03_pages/Login/Login.page";
import RegisterPage from "../../../03_pages/Register/Register.page";
import DashboardPage from "../../../03_pages/Dashboard/Dashboard.page";
import BoardPage from "../../../03_pages/Board/Board.page";


const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
    },
    {
      path: "/boards/:id",
      element: <BoardPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>
    }
]);

export function Router() {
  return <RouterProvider router={router} />;
}