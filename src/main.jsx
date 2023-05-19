import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="spiderman_no_way_home">
        <h1>La ruta especificada, no existe</h1>,
      </div>
    ),
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cv-giovanni-liotta.pdf",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={ROUTER}></RouterProvider>,
);
