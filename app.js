import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { className: "heading1"}, "Hello world from React! This is cool.");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);