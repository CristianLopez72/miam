import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./section/Hero";
import Register from "./section/Register";
import Help from "./section/Help";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
        //cuando tengamos la db lo ideal sería aprovechar lo que nos brinda react router dom y usar loader/action
      },
      {
        path: "/ayuda",
        element: <Help />,
      },
      {
        path: "/registro",
        element: <Register />,
      },
    ],
  },
]);
