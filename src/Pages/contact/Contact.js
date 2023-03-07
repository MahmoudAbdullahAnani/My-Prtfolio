import React from "react";
// import FormPropsTextFields from "../../Components/FieldContact";
import SocialMedia from "../../Components/SocialMedia";
import ContactUs from "../../Components/TestEmail";
import InformationMe from "../../Data/InformationMe";
import logoF from "../../Image/logos/44.png";
import { motion } from "framer-motion";

const Contacat = () => {
  return (
    <div className="contact">
      <div className="bg-dark  d-flex flex-column align-items-center ">
        <motion.img
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "keyframes" }}
          whileInView={{ y: 0 }}
          src={logoF}
          className="w-25 h-25"
          alt="logo-mahmoud_abdullah_anani"
        />
        <div className="container d-flex flex-wrap justify-content-around gap-5 mx-auto mt-2  text-white p-2">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "just" }}
            whileInView={{ x: 0 }}
            className="col col-11 col-md-5"
          >
            <InformationMe />
            <SocialMedia />
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: -100, opacity: 1 }}
            transition={{ duration: 0.5, type: "just" }}
            whileInView={{ x: 0 }}
            className="col col-xs-11 col-md-6"
          >
            <h6 className="text-center">
              Use a valid email address, So I can reply back.
            </h6>
            {/* <FormPropsTextFields /> */}
            <ContactUs />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacat;
