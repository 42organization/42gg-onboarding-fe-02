import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginPage } from "./pages/LoginPage";
async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  </React.StrictMode>
);
});
