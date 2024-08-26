import "./App.css";
import FooterC from "./components/FooterC";
import HeaderC from "./components/HeaderC";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import SinglePost from "./pages/SinglePost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/singlepost",
    element: <SinglePost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
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
