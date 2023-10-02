import React from "react";
const PDFCV = () => {
  return (
    <fragment>
      <div className="mt-4 ms-xs-auto ms-md-5">
        <a
          target="_blank"
          href="https://octopus-shop.onrender.com/cv/Mahmoud-Abdullah.pdf"
          className=""
          download="Mahmoud-Abdullah-Anani.pdf"
          rel="noreferrer"
        >
          <a
            href="https://octopus-shop.onrender.com/cv/Mahmoud-Abdullah.pdf"
            download="Mahmoud-Abdullah-Anani.pdf"
            target={"_blank"}
            rel="noreferrer"
            className="fs-5 fw-bold btn btn-primary"
          >
            Download My CV
          </a>
        </a>
      </div>
    </fragment>
  );
}
 
export default PDFCV;