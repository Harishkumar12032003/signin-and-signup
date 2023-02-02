import logo from "./logo.svg";
import { useState } from "react";

import "./App.css";
import NavigationBar from "./navbar/NavigationBar.js";
import Footer from "./footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./auth/Auth.js";
import Signup from "./auth/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
