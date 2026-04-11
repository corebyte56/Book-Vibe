import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./Router/Routes";
import ContextProvider from "./Context/context";
import { StrictMode } from "react";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
);
