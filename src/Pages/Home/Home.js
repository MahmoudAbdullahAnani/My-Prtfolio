import React from "react";
import PDFCV from "../../Components/PDF-CV";
import SocialMedia from "../../Components/SocialMedia";
import "./Home.css";
// 
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="Home">
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: -100, opacity: 1 }}
        whileInView={{x:0}}
        transition={{ damping: 60, duration: 0.5 }}
        className="container"
      >
        <div className="ms-md-4 container">
          <div className="typewriter pt-5 ">
            <h1 className="fw-bold mt-5 text-white w-100 ">Mahmoud Abdullah</h1>
          </div>
          <div className="typewriter  ">
            <h4 className="fw-bold  mt-2">Frontend Web Developer.</h4>
          </div>
          <SocialMedia />
        </div>
        <div className="ms-4">
          <PDFCV />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
