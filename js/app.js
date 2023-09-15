import React from "react";
import { createRoot } from "react-dom/client";

const App = () => { 
    return <h1 style={{fontFamily: 'Poppins,  sans-serif'}}>Work in progress  <i class="fa-solid fa-code"></i></h1>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);