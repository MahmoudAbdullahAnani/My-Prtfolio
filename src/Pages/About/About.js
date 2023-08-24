import React from "react";
import Skill from "../../Components/Skill";
import logo from "../../Image/Home-Avtar.jpg";
import "./About.css";
// Get All Skills for Images
import html from "../../Image/Skills/html.png";
import css from "../../Image/Skills/css.png";
import js from "../../Image/Skills/js.jpg";
import bootstrap from "../../Image/Skills/bootstrap.png";
import json from "../../Image/Skills/json.png";
import next from "../../Image/Skills/next.png";
import npmImg from "../../Image/Skills/npm.svg";
import react from "../../Image/Skills/react.png";
import redux from "../../Image/Skills/redux.png";
import sass from "../../Image/Skills/sass.png";
import ts from "../../Image/Skills/ts.png";
import restApi from "../../Image/Skills/rest-api-icon.webp";
import github from "../../Image/Skills/githun.png";
import es6 from "../../Image/Skills/es6.png";
import dom from "../../Image/Skills/Dom.jpg";
import ajax from "../../Image/Skills/AJAX_logo_by_gengns.svg.png";
import tailwind from "../../Image/Skills/tailwind.png";
import wowjs from "../../Image/Skills/wow-logo.jpg";
import framerMotion from "../../Image/Skills/framerMotion.png";


import InformationMe from "../../Data/InformationMe";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="text-white bg-dark">
      <div className="row  container justify-content-around ">
        <div className="col-11 mt-5 col-md-5 mt-lg-4">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ damping: 20, duration: 0.9, type: "just" }}
            
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ damping: 20, duration: 0.9, type: "just" }}
              
              className="Image-Avatr max-w-75"
            >
              <img
                src={logo}
                className="w-100 rounded"
                alt="Mahmoud Abdullah Anani"
              />
            </motion.div>
            <InformationMe />
          </motion.div>
        </div>
        <div className="col-11 col-md-6 mt-lg-4">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ damping: 20, duration: 0.9, type: "just" }}
            
            className="contenarTitle"
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                damping: 20,
                duration: 0.9,
                type: "just",
              }}
              
              className="d-flex align-items-center "
            >
              <h1 className="text-danger fw-bold m-0">Who am I &nbsp;</h1>
              <span className="fs-1 contenarTitleSpan fw-bold"> ?</span>
            </motion.div>
            <p className="fs-6 ms-2 fw-bolder">
              Hello there, My name is Mahmoud Abdullah Anani, I'm a 2-year
              experienced React.js Frontend Web Developer who enjoys building
              everything with JavaScript.
            </p>
            <p className="fs-6 ms-2 fw-bolder">
              In this duration, I have learned a lot of technologies, created
              many cool websites, collaborated with great developers and
              contributed to open source projects.
            </p>
            <p className="fs-6 ms-2 fw-bolder">
              So I'm always seeking to have an opportunity that matches my
              skills, to make the best use of all what I have learned.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              damping: 20,
              duration: 0.9,
              type: "tween",
            }}
            
            className="contenarTitle"
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                damping: 20,
                duration: 0.9,
                type: "tween",
              }}
              
              className="d-flex align-items-center "
            >
              <h1 className="text-danger fw-bold m-0">Education </h1>
              <span className="fs-1 fw-bold">:</span>
            </motion.div>
            <p className="fs-6 ms-2 fw-bolder">
              Bachelor of Management Information Systems - Misr Higher Institute
              of Commerce and Computers - 2019 - 2022.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              damping: 20,
              duration: 0.9,
              type: "tween",
            }}
            
            className="contenarTitle"
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                damping: 20,
                duration: 0.9,
                type: "tween",
              }}
              
              className="d-flex  align-items-center "
            >
              <h1 className="text-danger m-0 fw-bold">Experience </h1>
              <span className="fs-1 fw-bold">:</span>
            </motion.div>
            <p className="fs-6 ms-2 fw-bolder">
              1) Frontend Web Developer at Ad Samy, Full-Time, April 2022 -
              Mar2022 & Jun2022.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              damping: 20,
              duration: 0.9,
              type: "tween",
            }}
            
            className="contenarTitle"
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                damping: 20,
                duration: 0.9,
                type: "tween",
              }}
              
              className="d-flex align-items-center "
            >
              <h1 className="text-danger m-0 fw-bold">Certificates </h1>
              <span className="fs-1 fw-bold">:</span>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                damping: 20,
                duration: 0.9,
                type: "tween",
              }}
              
              className="fs-6 ms-2 fw-bolder"
            >
              <p className="m-1">1) SoloLearn certified JS Web Developer.</p>
              <p className="m-1">
                2) SoloLearn certified Frontend Web Developer.
              </p>
              <p className="m-1">3) SoloLearn certified ReactJS.</p>
              <div className="mt-3">
                <a
                  className="ms-2 "
                  href="https://github.com/MahmoudAbdullahAnani/Certificates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.button
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.2,
                      rotateZ: [
                        0, 0, 50, 80, 100, 150, 180, 250, 300, 360, 0, 0,
                      ],
                    }}
                    type="button"
                    className="btn btn-info"
                  >
                    View More
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.p
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
        
        className="fs-1 fw-bold text-center mt-5"
      >
        My Skills
      </motion.p>
      <div className="m-auto">
        <div className="d-flex gap-3 py-5 col-12 flex-wrap container justify-content-start">
          <Skill src={html} alt="html" skill="HTML5" />
          <Skill src={css} alt="css" skill="CSS3" />
          <Skill src={js} alt="js" skill="Javascript" />
          <Skill src={bootstrap} alt="bootstrap" skill="Bootstrap" />
          <Skill src={json} alt="json" skill="JSON Object" />
          <Skill src={next} alt="next" skill="Next JS" />
          <Skill src={npmImg} alt="npm" skill="npm" />
          <Skill src={react} alt="react" skill="React JS" />
          <Skill src={redux} alt="redux" skill="Redux-Toolkit" />
          <Skill src={sass} alt="sass" skill="Sass" />
          <Skill src={ts} alt="typescript" skill="type Script" />
          <Skill src={restApi} alt="RestAPIs" skill="Rest APIs" />
          <Skill src={github} alt="GitHub" skill="Git & GitHub" />
          <Skill src={es6} alt="ES6" skill="ES6" />
          <Skill src={dom} alt="DOM" skill="Dom" />
          <Skill src={ajax} alt="AJAX" skill="Ajax" />
          <Skill src={tailwind} alt="Tailwind" skill="Tailwind" />
          <Skill src={wowjs} alt="wowjs" skill="WOW JS" />
          <Skill src={framerMotion} alt="Framer Motion" skill="Framer Motion" />
        </div>
      </div>
    </div>
  );
};

export default About;
