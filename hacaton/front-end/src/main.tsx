import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import EventsPage from "./components/EventsPage/EventsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from './components/Main/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: "events",
        element: <EventsPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);