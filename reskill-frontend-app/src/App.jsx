import React, { Suspense, lazy } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Loader from "./components/Loader";
import FooterC from "./components/FooterC";
import HeaderC from "./components/HeaderC";
import ErrorPage from "./pages/ErrorPage";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const Homepage = lazy(() => import("./pages/Homepage"));
const SinglePost = lazy(() => import("./pages/SinglePost"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/singlepost/:id",
    loader: async ({ params }) => {
      const response = await axios.get(
        `http://localhost:3000/post/${params.id}`
      );
      return response;
    },
    element: (
      <Suspense fallback={<Loader />}>
        <SinglePost />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loader />}>
        <AboutPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loader />}>
        <ContactPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <HeaderC />
      <RouterProvider router={router} />
      <FooterC />
    </>
  );
}

export default App;
