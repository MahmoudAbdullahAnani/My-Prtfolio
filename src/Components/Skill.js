import React from "react";
import './SocialMedia.css'
const Skill = (props) => {
  return (
    <div className="py-2 border  justify-content-center contenarSkills align-items-center rounded px-3 d-flex gap-1">
      <div className="contenarImage">
        <img src={props.src} className="w-100 rounded" alt={props.alt} />
      </div>
      <div>
        <h5>{props.skill}</h5>
      </div>
    </div>
  );
};

export default Skill;
