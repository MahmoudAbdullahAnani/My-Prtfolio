import  React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

const ContactUs = () => {
      const [value, setValue] = React.useState(2);

  const form = useRef();

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
      e.target.reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "sent succesfully🎉",
        showConfirmButton: false,
        timer: 1500,
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mb-4">
      <div className="d-flex flex-column">
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="py-1 px-2 border-0 rounded"
        />
      </div>
      <div className="d-flex flex-column">
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="py-1 px-2 border-0 rounded"
        />
      </div>
      <div className="d-flex flex-column">
        <label>Message</label>
        <textarea name="message" className="py-1 px-2 border-0 rounded" />
      </div>
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
      <input
        type="submit"
        className="w-100 mt-1  text-white py-2  px-3 border-0 rounded bg-primary "
        value="Send"
      />
    </form>
  );
};
export default ContactUs;
