import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";

const normalPages = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <Navigate to={"/"} />,
      },
    ],
  },
];

const managerPages = [
  {
    path: "/manager",
    element: <Layout />,
    children: [
      {
        path: "/manager",
        element: <div>manager</div>,
      },
    ],
  },
];

const adminPages = [
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <div>admin</div>,
      },
    ],
  },
];

const router = createBrowserRouter(normalPages);
const managerRouter = createBrowserRouter([...normalPages, ...managerPages]);
const adminRouter = createBrowserRouter([
  ...normalPages,
  ...managerPages,
  ...adminPages,
]);
const loginRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
      {
        path: "/*",
        element: <Navigate to="/login" />,
      },
    ],
  },
]);

export { router, managerRouter, adminRouter, loginRouter };
