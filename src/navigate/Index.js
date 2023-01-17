


import {
  createBrowserRouter,
  
} from "react-router-dom";
import Dashboard from "../components/screen/Dashboard";
import Error404 from "../components/screen/Error404";
import Login from "../components/screen/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />
  }
  ,
  {
    path: "*",
    element: <Error404 />
  }
]);

export default router;