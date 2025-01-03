import "@styles/main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppProvider } from "@contexts/AppContext";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
