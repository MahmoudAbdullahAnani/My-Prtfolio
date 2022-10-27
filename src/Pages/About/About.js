import React from "react";
import logo from "../../Image/Home-Avtar.jpg";
const About = () => {
  return (
    <div className="text-white bg-dark">
      <div className="row  container justify-content-around ">
        <div className="col-11 mt-5 col-md-5 mt-lg-4">
          <div className="">
            <div className="Image-Avatr max-w-75">
              <img
                src={logo}
                className="w-100 rounded"
                alt="Mahmoud Abdullah Anani"
              />
            </div>
            <div className="mt-4">
              <p className="fw-bold m-2 fs-6">
                Name: <span className="fw-normal">Mahmoud Abdullah Anani</span>
              </p>
              <p className="fw-bold m-2 fs-6">
                Birth Date: <span className="fw-normal">May 28th 2002</span>
              </p>
              <p className="fw-bold m-2 fs-6">
                Phone Number: <span className="fw-normal">+01028876202</span>
              </p>
              <p className="fw-bold m-2 fs-6">
                Gmail:{" "}
                <span className="fw-normal">mahmoud18957321@gmail.com</span>
              </p>
              <p className="fw-bold m-2 fs-6">
                Address:{" "}
                <span className="fw-normal">
                  Al-Rahmaniya , Mit Ghamr, Dakahlia, Egypt
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-11 col-md-6 mt-lg-4">
          <div>
            <div className="d-flex align-items-center ">
              <h1 className="text-danger fw-bold m-0">Who am I &nbsp;</h1>
              <span className="fs-1 fw-bold"> ?</span>
            </div>
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
          </div>
          <div>
            <div className="d-flex align-items-center ">
              <h1 className="text-danger fw-bold m-0">Education </h1>
              <span className="fs-1 fw-bold">:-</span>
            </div>
            <p className="fs-6 ms-2 fw-bolder">
              Bachelor of Management Information Systems - Misr Higher Institute
              of Commerce and Computers - 2019 - 2022.
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center ">
              <h1 className="text-danger m-0 fw-bold">Experience </h1>
              <span className="fs-1 fw-bold">:-</span>
            </div>
            <p className="fs-6 ms-2 fw-bolder">
              1) Frontend Web Developer at Add Samy, Full-Time, April 2022 -
              Mar2022 & Jun2022.
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center ">
              <h1 className="text-danger m-0 fw-bold">Certificates </h1>
              <span className="fs-1 fw-bold">:-</span>
            </div>
            <div className="fs-6 ms-2 fw-bolder">
              <p className="m-1">1) SoloLearn certified JS Web Developer</p>
              <p className="m-1">
                2) SoloLearn certified Frontend Web Developer
              </p>
              <p className="m-1">3) SoloLearn certified ReactJS</p>
              <a
                className="ms-2"
                href="https://github.com/MahmoudAbdullahAnani/Certificates"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="btn btn-info">
                  View More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
