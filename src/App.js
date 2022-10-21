import './App.css';
import React from "react";
import LargNavbar from './layout/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <LargNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-white">Home</h1>
              <h1 className="text-white">Rahma El3abeta</h1>
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
    </>
  );
}

export default App;
