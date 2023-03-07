import React from "react";
import './SocialMedia.css'
import { motion } from "framer-motion";

const Skill = (props) => {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: -100, opacity: 1 }}
      transition={{ duration: .6, type: "keyframes" }}
      whileInView={{x:0}}
      className="py-2 border  justify-content-center contenarSkills align-items-center rounded px-3 d-flex gap-1"
    >
      <div className="contenarImage">
        <img src={props.src} className="w-100 rounded" alt={props.alt} />
      </div>
      <div>
        <h5>{props.skill}</h5>
      </div>
    </motion.div>
  );
};

export default Skill;
