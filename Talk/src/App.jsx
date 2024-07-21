import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import "./App.css";
const App = () => {

  return (

  <div className="flex min-h-screen">
    {/* <Navbar /> */}
    <Home />
  </div>

  );
}

export default App;
