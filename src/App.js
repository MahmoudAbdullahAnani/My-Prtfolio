import './App.css';
import React from "react";
import LargNavbar from './layout/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import CopyRight from './layout/Footer/CopyRight';
function App() {
  return (
    <>
      
      <LargNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home/>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h1 className="text-white">about</h1>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <h1 className="text-white">projects</h1>
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <h1 className="text-white">blogs</h1>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <h1 className="text-white">contact</h1>
            </>
          }
        />
      </Routes>
      <CopyRight/>
    </>
  );
}

export default App;
