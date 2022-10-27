import React from "react";
import PDFCV from "../../Components/PDF-CV";
import SocialMedia from "../../Components/SocialMedia";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="typewriter pt-5 ps-5">
        <h1 className="fw-bold mt-5 text-white p-3 ">Mahmoud Abdullah</h1>
      </div>
      <div className="typewriter  ps-2">
        <h4 className="fw-bold ms-4 mt-2">Frontend Web Developer.</h4>
      </div>
      <SocialMedia />
      <PDFCV />
    </div>
  );
};

export default Home;
