import React from "react";
import Site from "./Site";
import './SocialMedia.css'
const SocialMedia = () => {
  return (
    <div className="SocialMedia d-flex gap-3 mt-4 ms-5 rounded">
      <div className="p-2 border rounded bg-dark">
        <div className="p-2 border rounded reotre bg-info">
          <Site class="fa-brands fa-whatsapp fs-2 fw-bold text-white" />
        </div>
      </div>
      <div className="p-2 border rounded bg-dark">
        <div className="p-2 border rounded reotre bg-info">
          <Site class="fa-brands fa-whatsapp fs-2 fw-bold text-white" />
        </div>
      </div>
      <div className="p-2 border rounded bg-dark">
        <div className="p-2 border rounded reotre bg-info">
          <Site class="fa-brands fa-whatsapp fs-2 fw-bold text-white" />
        </div>
      </div>
      <div className="p-2 border rounded bg-dark">
        <div className="p-2 border rounded reotre bg-info">
          <Site class="fa-brands fa-whatsapp fs-2 fw-bold text-white" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
