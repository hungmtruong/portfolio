import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
        <Route path="/" exact>
          <Homepage />
        </Route>
       
    </BrowserRouter>
  );
}

export default App;
