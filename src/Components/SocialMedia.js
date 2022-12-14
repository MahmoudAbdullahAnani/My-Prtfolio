import React from "react";
import Site from "./Site";
import './SocialMedia.css'
const SocialMedia = () => {
  return (
    <div className="SocialMedia justify-content-center  d-flex gap-3 mt-4  rounded">
      <div className="hit  rounded whatsapp">
        <div className="p-2  rounded reotre bg-secondary bg-gradient">
          <Site
            href="https://api.whatsapp.com/send?phone=201028876202"
            class="fa-brands fa-whatsapp fs-2 fw-bold text-white"
          />
        </div>
      </div>
      <div className="hit  rounded  github">
        <div className="p-2  rounded reotre bg-secondary bg-gradient">
          <Site
            href="https://github.com/MahmoudAbdullahAnani"
            class="fa-brands fa-github fs-2 fw-bold text-white"
          />
        </div>
      </div>
      <div className="hit  rounded linkedin">
        <div className="p-2  rounded reotre bg-secondary bg-gradient">
          <Site
            href="https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/"
            class="fa-brands fa-linkedin fs-2 fw-bold text-white"
          />
        </div>
      </div>
      <div className="hit  rounded youtube">
        <div className="p-2 h-100  rounded reotre bg-secondary bg-gradient">
          <Site
            href="https://www.youtube.com/channel/UCnfdCmY1GR4APYsP38k8hXA"
            class="fa-brands fa-youtube fs-2 fw-bold text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
