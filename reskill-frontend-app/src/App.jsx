import "./App.css";
import FooterC from "./components/FooterC";
import HeaderC from "./components/HeaderC";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import SinglePost from "./pages/SinglePost";
import axios from "axios";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async() => {
      const response = axios.get("http://localhost:3000/posts");
      return response;
    } ,
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/singlepost/:id",
    loader: async({params}) => {
      const response = await axios.get(`http://localhost:3000/post/${params.id}`);
      return response;
    } ,
    element: <SinglePost />,
    // errorElement: <ErrorPage />,
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
