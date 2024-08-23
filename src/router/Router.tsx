import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage/MainPage";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [{ path: "", element: <MainPage /> }],
      },
    ])}
  />
);

export default Router;
