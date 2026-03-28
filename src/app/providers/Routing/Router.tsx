import { createBrowserRouter, RouterProvider } from "react-router";
import { BoardPage } from "@/pages/Board";
import { DashboardPage } from "@/pages/Dashboard";
import { LoginPage } from "@/pages/Login";
import { RegisterPage } from "@/pages/Register";
import ErrorPage from "@/pages/Error/Error.page";
import ProtectedRoute from "./ProtectedRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <ProtectedRoute>
          <DashboardPage/>
      </ProtectedRoute>
    },
    {
      path: "/boards/:id",
      element: 
      <ProtectedRoute>
          <BoardPage/>
      </ProtectedRoute>
          
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>
    },
    {
      path: '*',
      element: <ErrorPage/>
    }
]);

export function Router() {
  return <RouterProvider router={router} />;
}