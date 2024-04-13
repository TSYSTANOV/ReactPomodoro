import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css"
import { App } from "./App";
const title = document.querySelector('title')

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App title={title}/>);
