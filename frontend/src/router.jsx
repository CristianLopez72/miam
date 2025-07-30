import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./section/Hero";


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
  path: "/",
  element: <Hero />,
}

    ],
  },
]);
