import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { RouterProvider } from "react-router-dom";
import { adminRouter, loginRouter, managerRouter, router } from "./router";
import { userState } from "./atoms/auth";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

function App() {
  const [user] = useRecoilState(userState);

  return !user ? (
    <RouterProvider router={loginRouter} />
  ) : user.role === "admin" ? (
    <RouterProvider router={adminRouter} />
  ) : user.role === "manager" ? (
    <RouterProvider router={managerRouter} />
  ) : (
    <RouterProvider router={router} />
  );
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
});
