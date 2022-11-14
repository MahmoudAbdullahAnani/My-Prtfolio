import React from "react";
import RecipeReviewCard from "../../Components/CardeComp-B";
import ecommers from "../../Image/projects/e-commers.jpg";
import fylo from "../../Image/projects/fylo.jpg";
import moslem from "../../Image/projects/moslem.jpg";
import green from "../../Image/projects/green.jpg";
import lebsokm from "../../Image/projects/lebsokm.jpg";

const Projects = () => {
  return (
    <div className="bg-dark">
      <div className="container py-4 row justify-content-around mx-auto gap-4">
        <RecipeReviewCard
          number="1"
          image={ecommers}
          title="this is title"
          github="https://github.com/MahmoudAbdullahAnani/e-commers-flashye"
          dom="https://last-full-ecommers.netlify.app/"
        />
        <RecipeReviewCard
          number="2"
          image={fylo}
          title="this is title"
          github="https://github.com/MahmoudAbdullahAnani/Fylo-React-Project"
          dom="https://fyloone.netlify.app/"
        />
        <RecipeReviewCard
          number="3"
          image={moslem}
          title="this is title"
          github="https://github.com/MahmoudAbdullahAnani/Prayer-Timings"
          dom="https://my-prayer.netlify.app/"
        />
        <RecipeReviewCard
          number="4"
          image={green}
          title="this is title"
          github="https://github.com/MahmoudAbdullahAnani/Green-Candles"
          dom="https://greencandles-m.com/"
        />
        <RecipeReviewCard
          number="5"
          image={lebsokm}
          title="this is title"
          github="https://github.com/MahmoudAbdullahAnani/front-lebsokm"
          dom="https://gs6ngz6ttvjnu8svwz6hfw.on.drv.tw/New_front-lebskom/front-lebskom/front-lebsokm/Homepage_1/"
        />
        <RecipeReviewCard
          number="6"
          image=""
          title="this is title"
          github=""
          dom=""
        />
      </div>
    </div>
  );
}
 
export default Projects;