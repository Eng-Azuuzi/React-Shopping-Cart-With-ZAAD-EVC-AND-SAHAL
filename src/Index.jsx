import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./ShopContext";
import "./Index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ShopProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
);
