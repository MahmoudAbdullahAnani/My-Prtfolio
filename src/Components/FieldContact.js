import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
export default function FormPropsTextFields() {
  const form = useRef();
  const [value, setValue] = React.useState(2);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mrbbap9",
        "template_ei3o3dh",
        form.current,
        "zLD4B1n0hmqq4g8E1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setValue(2);
  };
  return (
    <div className="">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* <input type="text" name="name_user" /> */}
        <TextField
          onChange={(e) => setName(e.target.value)}
          className="w-100 InptCon rounded"
          name="name_user"
          value={Name}
          id="name_user"
          label="Enter your name"
          type="text"
          autoComplete="current-name"
        />
        <br />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className="w-100 InptCon text-white  rounded"
          name="from_email"
          value={Email}
          id="from_email"
          label="Enter your email"
          type="text"
          autoComplete="current-email"
        />
        <div className="ms-2 w-100">
          <label hrmlfor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            name="message"
            value={Message}
            id="message"
            rows="3"
          ></textarea>
        </div>
      </Box>
      <div className="text-center rat">
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Your rating for the site?</Typography>
          <Rating
            id="rat"
            name="rat"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
      <form ref={form} className="text-center" onSubmit={sendEmail}>
        <Button type="submit" className="my-3 px-4" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
}
