import { createBrowserRouter, RouterProvider } from "react-router";
import { BoardPage } from "@/pages/Board";
import { DashboardPage } from "@/pages/Dashboard";
import { LoginPage } from "@/pages/Login";
import { RegisterPage } from "@/pages/Register";


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