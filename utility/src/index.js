import Main from "./pages/Main";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { AuthManager } from "@utility/AuthManager";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("layaout"));
const App = () => (
  <div className="some">
    React Basic
    <Main />
  </div>
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
