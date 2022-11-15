import React from "react";
const InformationMe = () => {
  return (
    <>
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
        <p className="fw-bold d-flex gap-2 m-2 fs-6">
          Gmail:
          <span className="fw-normal">mahmoud18957321@gmail.com</span>
        </p>
        <p className="fw-bold m-2 fs-6">
          Address:{" "}
          <span className="fw-normal">
            Al-Rahmaniya , Mit Ghamr, Dakahlia, Egypt
          </span>
        </p>
      </div>
    </>
  );
};

export default InformationMe;
