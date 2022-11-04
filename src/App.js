import './App.css';
import React from "react";
import LargNavbar from './layout/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import CopyRight from './layout/Footer/CopyRight';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs'
import Projects from './Pages/Projects/Projects';
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
              <About />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects/>
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Blogs />
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
