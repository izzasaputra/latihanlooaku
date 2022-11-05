import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Edit from "./pages/Edit";
import List from "./pages/List";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  {
    path: "/Edit",
    children: [{ path: ":id", element: <Edit /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);
