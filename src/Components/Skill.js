import React from "react";
const Skill = (props) => {
  return (
    <div className="py-2 px-3 d-flex gap-1">
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <h5>{props.skill}</h5>
      </div>
    </div>
  );
};

export default Skill;
