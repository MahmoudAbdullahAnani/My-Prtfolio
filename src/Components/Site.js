import React from "react";
const Site = (props) => {
  return (
    <a href={props.href} className="">
      <i className={props.class}></i>
    </a>
  );
};

export default Site;
