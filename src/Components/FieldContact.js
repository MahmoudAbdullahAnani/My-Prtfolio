import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import ToggleButtons from "./FormatText";

export default function FormPropsTextFields() {
  return (
    <div className="">
      <Box
        // className="bg-dark"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* <ToggleButtons /> */}
        <TextField
          className="w-100 InptCon rounded"
          id="outlined-name-input"
          label="Enter your name"
          type="text"
          autoComplete="current-name"
        />
        <br />
        <TextField
          className="w-100 InptCon text-white  rounded"
          id="outlined-email-input"
          label="Enter your email"
          type="text"
          autoComplete="current-email"
        />
        <div className="ms-2 w-100">
          <label hrmlfor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </Box>
    </div>
  );
}
