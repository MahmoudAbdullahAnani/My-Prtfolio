import React from "react";
import PDFCV from "../../Components/PDF-CV";
import SocialMedia from "../../Components/SocialMedia";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="ms-md-4 container">
          <div className="typewriter pt-5 ">
            <h1 className="fw-bold mt-5 text-white w-100 ">Mahmoud Abdullah</h1>
          </div>
          <div className="typewriter  ">
            <h4 className="fw-bold  mt-2">Frontend Web Developer.</h4>
          </div>
          <SocialMedia />
        </div>
        <div className="ms-5">
          <PDFCV />
        </div>
      </div>
    </div>
  );
};

export default Home;
