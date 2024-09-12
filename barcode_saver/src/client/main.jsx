import React from "react";
import ReactDOM from "react-dom/client";

//import { Provider } from "react-redux";
//import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root.jsx";
import Home from "./Home.jsx";
import Scanner from "./Scanner.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/scan", element: <Scanner /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <RouterProvider router={router} />
    
  </React.StrictMode>
);
