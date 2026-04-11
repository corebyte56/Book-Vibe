import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./Router/Routes";
import ContextProvider from "./Context/context";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ToastContainer>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </ToastContainer>,
);
