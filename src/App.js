import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Content />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
