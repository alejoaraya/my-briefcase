import React from "react";
import ReactDOM from "react-dom/client";
import { BriefcaseApp } from "./BriefcaseApp.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <BriefcaseApp />
    </React.StrictMode>
  </BrowserRouter>
);
