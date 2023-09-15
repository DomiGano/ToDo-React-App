import React from "react";
import { createRoot } from "react-dom/client";
import { MainBox } from "./MainBox";
import "../style/main.scss"

const App = () => { 
    return <MainBox/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);