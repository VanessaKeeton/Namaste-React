import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import RouterError from "./components/RouterError"

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
)

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: <Content />
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
