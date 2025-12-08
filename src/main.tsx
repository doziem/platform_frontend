import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Login from "./main/Login.tsx";
import Layout from "./component/Layout.tsx";
import Store from "./main/Store.tsx";
import Dashboard from "./main/Dashboard.tsx";
import Home from "./main/Home.tsx";
import Settings from "./component/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "store", element: <Store /> },
          { path: "settings", element: <Settings /> },
        ],
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
