import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { IsRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IsRoutes />
  </React.StrictMode>
);
