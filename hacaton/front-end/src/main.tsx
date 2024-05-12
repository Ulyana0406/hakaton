import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import EventsPage from "./components/EventsPage/EventsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/Main/Main";
import AboutEvent from "./components/AboutEvent/AboutEvent";
import AboutProject from "./components/AboutProject/AboutProject";
import CreateYourProject from "./components/CreateYourProject/CreateYourProject";
import Projects from "./components/Projects/Projects";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import User from "./components/User/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "aboutevent",
        element: <AboutEvent />,
      },
      {
        path: "createproject",
        element: <CreateYourProject />,
      },
      {
        path: "aboutproject",
        element: <AboutProject />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "createevent",
        element: <CreateEvent />,
      },
      {
        path: "userpage",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
