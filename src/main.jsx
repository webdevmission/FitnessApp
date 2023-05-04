import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home";

import "./index.css";
import App from "./pages/Home";
import Programs from "./pages/Programs";

const router = createBrwoserRouter([
  { path: "/", element: <App /> },
  { path: "/programs", element: <Programs /> },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
