import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import routes from "./routes";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

const Fallback = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-gray-900"></div>
  </div>
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </React.StrictMode>
);