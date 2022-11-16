import React from "react";
import "./Navbar.css";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Home } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BookIcon from "@mui/icons-material/Book";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Image/logos/44.png";
const LargNavbar = (props) => {
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const naveget = useNavigate();

  return (
    <>
      {window.innerWidth <= 996 ? (
        <BottomNavigation
          className="fixed-bottom px-5 mx-2 navBtn mb-3 rounded"
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            className="ps-5 active "
            onClick={() => naveget("/")}
            label="Home"
            value="home"
            icon={<Home />}
          />

          <BottomNavigationAction
            onClick={() => naveget("/about")}
            label="About"
            value="about"
            icon={<InfoIcon />}
          />
          <BottomNavigationAction
            onClick={() => naveget("/projects")}
            label="Projects"
            value="projects"
            icon={<AccountTreeIcon />}
          />
          <BottomNavigationAction
            onClick={() => naveget("/blogs")}
            label="Blogs"
            value="blogs"
            icon={<BookIcon />}
          />
          <BottomNavigationAction
            onClick={() => naveget("/contact")}
            className="pe-5"
            label="Contact"
            value="contact"
            icon={<PermContactCalendarIcon />}
          />
        </BottomNavigation>
      ) : (
        <nav className="navbar sticky-top navbar-dark bg-dark  navbar-expand-lg ">
          <div className="container">
            <div className="logo w-100 relative d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center logoText fw-bolder ">
                <div className="d-inline logoNav">
                  <img
                    src={Logo}
                    className="w-100"
                    alt="logo-mahmoud-abdullah-anani"
                  />
                </div>
                <div className="mt-2">
                  <span className="text-danger">M</span>y{" "}
                  <span className="text-danger">P</span>ortfolo
                </div>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={props.actHome} aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={props.actAbout}
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={props.actProjects}
                    aria-current="page"
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={props.actBlogs}
                    aria-current="page"
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={props.actContact}
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default LargNavbar;
