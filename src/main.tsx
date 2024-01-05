import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StatisticsProviderContext } from "./contexts/StatisticsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StatisticsProviderContext>
      <App />
    </StatisticsProviderContext>
  </React.StrictMode>
);
