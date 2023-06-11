import Main from "./pages/Main";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("layaout"));
const App = () => (
  <div className="some">
    React Basic
    <Main />
  </div>
);

root.render(<App />);
