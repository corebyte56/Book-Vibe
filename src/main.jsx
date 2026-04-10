import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import MainLayout from "./Layout/mainlayout.jsx";
import Books from "./Pages/Books/Books.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
    {
        index: true,
        element: <HomePage />
    },
    {
        path: '/books',
        element: <Books />
    }
  ]
  },

  
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
