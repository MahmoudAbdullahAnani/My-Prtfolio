import React from "react";
const PDFCV = () => {
  return (
    <>
      <div className="mt-4 ms-xs-auto ms-md-5">
        <a
          href="./Mahmoud-Abdullah-Anani.pdf"
          className=""
          download="Mahmoud-Abdullah-Anani.pdf"
        >
          <button type="button" className="fs-5 fw-bold btn btn-primary">
            Download My CV
          </button>
        </a>
      </div>
    </>
  );
}
 
export default PDFCV;