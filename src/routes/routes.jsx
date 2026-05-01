import { Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
    isIndex: true,
  },
  {
    path: "*",
    element: <NotFound />,
    isIndex: false,
  },
];

export default routes;
