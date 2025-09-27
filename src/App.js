import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = lazy(() => import("./components/Header"));
const Content = lazy(() => import("./components/Content"));
const Footer = lazy(() => import("./components/Footer"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const RouterError = lazy(() => import("./components/RouterError"));
const RestaurantDetail = lazy(() => import("./components/RestaurantDetail"))

const AppLayout = () => {
  return (
    <div className="app m-8">
        <Header />
        {
          useOnlineStatus()
          ? <Outlet />
          : <div>It appears you are offline. Please check your internet status.</div>
        }
        <Footer />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}><Content /></Suspense>
      },
      {
        path: "/contact-us",
        element: <Suspense fallback={<div>Loading...</div>}><ContactUs /></Suspense>,
      },
      {
        path: "/about-us",
        element: <Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <Suspense fallback={<div>Loading...</div>}><RestaurantDetail /></Suspense>
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
