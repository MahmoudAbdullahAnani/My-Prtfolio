import React from "react";
// import FormPropsTextFields from "../../Components/FieldContact";
import SocialMedia from "../../Components/SocialMedia";
import ContactUs from "../../Components/TestEmail";
import InformationMe from "../../Data/InformationMe";
import logoF from "../../Image/logos/44.png";
const Contacat = () => {
    return (
      <div className="contact">
        <div className="bg-dark  d-flex flex-column align-items-center ">
          <img
            src={logoF}
            className="w-25 h-25"
            alt="logo-mahmoud_abdullah_anani"
          />
          <div className="container d-flex flex-wrap justify-content-around gap-5 mx-auto mt-2  text-white p-2">
            <div className="col col-11 col-md-5">
              <InformationMe />
              <SocialMedia />
            </div>
            <div className="col col-xs-11 col-md-6">
              <h6 className="text-center">
                Use a valid email address, So I can reply back.
              </h6>
              {/* <FormPropsTextFields /> */}
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contacat;
