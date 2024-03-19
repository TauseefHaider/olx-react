import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Mobiles from "./pages/Mobiles.jsx";
import Cars from "./pages/Cars.jsx";
import Bikes from "./pages/Bikes.jsx";
import Houses from "./pages/Houses.jsx";
import Tablets from "./pages/Tablets.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "mobiles",
        element: <Mobiles />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "bikes",
        element: <Bikes />,
      },
      {
        path: "houses",
        element: <Houses />,
      },
      {
        path: "tablets",
        element: <Tablets />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
