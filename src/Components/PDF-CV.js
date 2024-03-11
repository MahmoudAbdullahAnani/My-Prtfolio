import React from "react";
const PDFCV = () => {
  return (
    <React.Fragment>
      <div className="mt-4 ms-xs-auto ms-md-5">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1WcV_HNCAoFaxd1CiEFwKbCSDqka072_y/view"
          className=""
          download="Mahmoud-Abdullah-Anani.pdf"
          rel="noreferrer"
        >
          <a
            href="https://drive.google.com/file/d/1WcV_HNCAoFaxd1CiEFwKbCSDqka072_y/view"
            download="Mahmoud-Abdullah-Anani.pdf"
            target={"_blank"}
            rel="noreferrer"
            className="fs-5 fw-bold btn btn-primary"
          >
            Download My CV
          </a>
        </a>
      </div>
    </React.Fragment>
  );
}
 
export default PDFCV;