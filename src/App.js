import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ARoute from "./Components/Route";
import Index from "./Components/Navbars/Index";

function App() {
  return (
    <div>
      <Index />
      <Router>
        <ARoute />
      </Router>
    </div>
  );
}

export default App;
