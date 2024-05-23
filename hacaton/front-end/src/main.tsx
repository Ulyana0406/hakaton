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
import ModalEvent from "./components/ModalEvent/ModalEvent";
import ConverationPage from "./components/ConverationPage/Converation";
import CoworkingPage from "./components/CoworkingPage/CoworkingPage";
import Projects_2 from "./components/Projects_2/Projects";
import Projects_3 from "./components/Projects_3/Projects";
import Projects_4 from "./components/Projects_4/Projects";
import ProjectsPage from "./components/ProjectList/ProjectsPage";
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
        element: <ProjectsPage />,
      },
      {
        path: "projects/1",
        element: <Projects />,
      },
      {
        path: "projects/2",
        element: <Projects_2 />,
      },
      {
        path: "projects/3",
        element: <Projects_3 />,
      },
      {
        path: "projects/4",
        element: <Projects_4 />,
      },
      {
        path: "createevent",
        element: <CreateEvent />,
      },
      {
        path: "userpage",
        element: <User />,
      },
      {
        path: "modalevent",
        element: <ModalEvent />,
      },
      {
        path: "converation",
        element: <ConverationPage />,
      },
      {
        path: "coworking",
        element: <CoworkingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
