import './App.css';
import React from "react";
import LargNavbar from './layout/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import CopyRight from './layout/Footer/CopyRight';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs'
import Projects from './Pages/Projects/Projects';
import Contacat from './Pages/contact/Contact';
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LargNavbar
                actHome="nav-link text-white"
                actAbout="nav-link text-white-50"
                actProjects="nav-link text-white-50"
                actBlogs="nav-link text-white-50"
                actContact="nav-link text-white-50"
              />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <LargNavbar
                actHome="nav-link text-white-50"
                actAbout="nav-link text-white"
                actProjects="nav-link text-white-50"
                actBlogs="nav-link text-white-50"
                actContact="nav-link text-white-50"
              />
              <About />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <LargNavbar
                actHome="nav-link text-white-50"
                actAbout="nav-link text-white-50"
                actProjects="nav-link text-white"
                actBlogs="nav-link text-white-50"
                actContact="nav-link text-white-50"
              />
              <Projects />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <LargNavbar
                actHome="nav-link text-white-50"
                actAbout="nav-link text-white-50"
                actProjects="nav-link text-white-50"
                actBlogs="nav-link text-white"
                actContact="nav-link text-white-50"
              />
              <Blogs />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <LargNavbar
                actHome="nav-link text-white-50"
                actAbout="nav-link text-white-50"
                actProjects="nav-link text-white-50"
                actBlogs="nav-link text-white-50"
                actContact="nav-link text-white"
              />
              <Contacat />
            </>
          }
        />
      </Routes>
      <CopyRight />
    </>
  );
}

export default App;
