import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import {router} from "./Router/Routes";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
