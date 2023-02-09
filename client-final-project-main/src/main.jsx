import Notiflix from "notiflix";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

Notiflix.Notify.init({ clickToClose: true });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
