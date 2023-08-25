import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

// Contents
import {
  frontProjects,
  backProjects,
  fullProjects,
  allProjects,
  totalProjects,
} from "./content";

let typeProjects = "all";

const Projects = () => {
  // const [typeProjects, settest] = useState("");

  const [colorBtnFrontFilter, setColorBtnFrontFilter] = useState(["", ""]);
  const [colorBtnBackFilter, setColorBtnBackFilter] = useState(["", ""]);
  const [colorBtnFullFilter, setColorBtnFullFilter] = useState(["", ""]);
  const [colorBtnAllFilter, setColorBtnAllFilter] = useState(["", ""]);
  const checngActionBtnFilter = () => {
    if (typeProjects === "front") {
      setColorBtnFrontFilter(["black", "white"]);
      setColorBtnBackFilter(["white", "black"]);
      setColorBtnFullFilter(["white", "black"]);
      setColorBtnAllFilter(["white", "black"]);
    } else if (typeProjects === "back") {
      setColorBtnFrontFilter(["white", "black"]);
      setColorBtnBackFilter(["black", "white"]);
      setColorBtnFullFilter(["white", "black"]);
      setColorBtnAllFilter(["white", "black"]);
    } else if (typeProjects === "full") {
      setColorBtnFrontFilter(["white", "black"]);
      setColorBtnBackFilter(["white", "black"]);
      setColorBtnFullFilter(["black", "white"]);
      setColorBtnAllFilter(["white", "black"]);
    } else {
      setColorBtnFrontFilter(["white", "black"]);
      setColorBtnBackFilter(["white", "black"]);
      setColorBtnFullFilter(["white", "black"]);
      setColorBtnAllFilter(["black", "white"]);
    }
  };

  // Handling Styls BTNs
  const styleBtnFilter = {
    background: "black",
    // color: "white",
    border: "0px",
    margin: "5px 2px",
    padding: "5px",
    borderRadius: "10px",
  };
  const styleBtnFilterFront = {
    ...styleBtnFilter,
    color: colorBtnFrontFilter[0],
    background: colorBtnFrontFilter[1],
  };
  const styleBtnFilterBack = {
    ...styleBtnFilter,
    color: colorBtnBackFilter[0],
    background: colorBtnBackFilter[1],
  };
  const styleBtnFilterFull = {
    ...styleBtnFilter,
    color: colorBtnFullFilter[0],
    background: colorBtnFullFilter[1],
  };
  const styleBtnFilterAll = {
    ...styleBtnFilter,
    color: colorBtnAllFilter[0],
    background: colorBtnAllFilter[1],
  };

  useEffect(() => {
    checngActionBtnFilter();
  }, []);
  const renderHtmlContent = () => {
    if (typeProjects === "all") {
      return allProjects();
    } else if (typeProjects === "front") {
      return frontProjects();
    } else if (typeProjects === "back") {
      return backProjects();
    } else if (typeProjects === "full") {
      return fullProjects();
    }
    return <b className="bg-white">No Content</b>;
  };
  return (
    <div className="bg-dark">
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: -100, opacity: 1 }}
        transition={{ duration: 0.7, type: "just" }}
        whileInView={{ x: 0 }}
      >
        <header className={`text-center`}>
          {/* Front-End */}
          <button
            onClick={() => {
              typeProjects = "front";
              checngActionBtnFilter();
              renderHtmlContent();
            }}
            style={styleBtnFilterFront}
          >
            Front-End
          </button>
          {/* Back-End */}
          <button
            onClick={() => {
              // settest("back");
              typeProjects = "back";
              checngActionBtnFilter();
              renderHtmlContent();
            }}
            style={styleBtnFilterBack}
          >
            Back-End
          </button>
          {/* MERN-Stack */}
          <button
            onClick={() => {
              // settest("full");
              typeProjects = "full";
              checngActionBtnFilter();
              renderHtmlContent();
            }}
            style={styleBtnFilterFull}
          >
            Full-Stack & MERN-Stack
          </button>
          <button
            onClick={() => {
              // settest("all");
              typeProjects = "all";
              checngActionBtnFilter();
              renderHtmlContent();
            }}
            style={styleBtnFilterAll}
          >
            All ({totalProjects})
          </button>
        </header>
        {renderHtmlContent()}
      </motion.div>
    </div>
  );
};

export default Projects;
