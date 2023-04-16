import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MiniGame from "./pages/MiniGame";
import { store } from "./app/store";
import { Provider } from "react-redux";
import MinorGame from "./pages/MinorGame";
import MajorGame from "./pages/MajorGame";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mini-game",
    element: <MiniGame />,
  },
  {
    path: "/minor-game",
    element: <MinorGame />,
  },
  {
    path: "/major-game",
    element: <MajorGame />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
