import React from "react";
const Site = (props) => {
  return (
    <a href="/" className="">
      {/* <i class="fa-brands fa-whatsapp"></i> */}
      <i className={props.class}></i>
    </a>
  );
};

export default Site;
