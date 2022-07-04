import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
