import { Button } from "@mui/material";
import React from "react";
import FormPropsTextFields from "../../Components/FieldContact";
import BasicRating from "../../Components/Rating";
import SocialMedia from "../../Components/SocialMedia";
import InformationMe from "../../Data/InformationMe";
import logoF from "../../Image/logos/44.png";
const Contacat = () => {
  return (
    <div className="bg-dark contact d-flex flex-column align-items-center ">
      <img
        src={logoF}
        className="w-25 h-25"
        alt="logo-mahmoud_abdullah_anani"
      />
      <div className="container row justify-content-around gap-5 mx-auto mt-2 p-5 text-white ">
        <div className="col col-11 col-md-5">
          <InformationMe />
          <SocialMedia />
        </div>
        <div className="col col-xs-11 col-md-6">
          <h6 className="text-center">
            Use a valid email address, So I can reply back.
          </h6>
          <FormPropsTextFields />
          <div className="text-center rat">
            <BasicRating />
          </div>
          <div className="text-center">
            <Button className="my-3 px-4" variant="contained">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacat;
