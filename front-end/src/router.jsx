import { createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { PrivateProfileRoute } from "./privateRoute";

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <PrivateProfileRoute element={<Profile />} />,
      },
    ],
  },
]);
