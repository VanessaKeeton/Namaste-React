import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Content = lazy(() => import("./components/Content"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const RouterError = lazy(() => import("./components/RouterError"));
const RestaurantDetail = lazy(() => import("./components/RestaurantDetail"))
const Cart = lazy(()=> import("./components/Cart"))

const AppLayout = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    //make api call to user api then set data
    const data = {
      name: "Vanessa Keeton"
    }

    setUser(data);
    // return () => {
      
    // };
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{
        loggedInUser: user?.name,
      }}>
          <div className="app m-8">
            <Header />
            {
              useOnlineStatus()
              ? <Outlet />
              : <div>It appears you are offline. Please check your internet status.</div>
            }
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
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
      },
      {
        path: "/cart",
        element: <Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
