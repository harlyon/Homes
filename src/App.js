import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ARoute from "./Components/Route";
import Index from "./Components/Navbars/Index";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Index />
      <Router>
        <ARoute />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
