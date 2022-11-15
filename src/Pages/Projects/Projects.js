import React from "react";
import RecipeReviewCard from "../../Components/CardeComp-B";
import ecommers from "../../Image/projects/e-commers.jpg";
import fylo from "../../Image/projects/fylo.jpg";
import moslem from "../../Image/projects/moslem.jpg";
import green from "../../Image/projects/green.jpg";
import lebsokm from "../../Image/projects/lebsokm.jpg";
import loopstudiosone from "../../Image/projects/loopstudiosone..jpg";

const Projects = () => {
  return (
    <div className="bg-dark">
      <div className="container py-4 row justify-content-around mx-auto gap-4">
        <RecipeReviewCard
          number="1/6"
          image={ecommers}
          title="Flashye"
          discraption="A website for selling clothes, you can order the product and shop through this website."
          github="https://github.com/MahmoudAbdullahAnani/e-commers-flashye"
          dom="https://last-full-ecommers.netlify.app/"
        />
        <RecipeReviewCard
          number="2/6"
          image={fylo}
          title="Fylo"
          discraption="It is a website that displays the capabilities of a company that works on hosting and protecting files."
          github="https://github.com/MahmoudAbdullahAnani/Fylo-React-Project"
          dom="https://fyloone.netlify.app/"
        />
        <RecipeReviewCard
          number="3/6"
          image={moslem}
          title="Prayer"
          discraption="It is a website that displays prayer times according to the city that is chosen."
          github="https://github.com/MahmoudAbdullahAnani/Prayer-Timings"
          dom="https://my-prayer.netlify.app/"
        />
        <RecipeReviewCard
          number="4/6"
          image={green}
          title="Green Candles"
          discraption="Green Candles is one of the leading marketing management companies in the United Arab Emirates specialized in digital and electronic marketing."
          github="https://github.com/MahmoudAbdullahAnani/Green-Candles"
          dom="https://greencandles-m.com/"
        />
        <RecipeReviewCard
          number="5/6"
          image={lebsokm}
          title="Lebsokm"
          discraption="It is a large clothing store that belongs to a company dedicated to selling clothes based in Dubai."
          github="https://github.com/MahmoudAbdullahAnani/front-lebsokm"
          dom="https://gs6ngz6ttvjnu8svwz6hfw.on.drv.tw/New_front-lebskom/front-lebskom/front-lebsokm/Homepage_1/"
        />
        <RecipeReviewCard
          number="6/6"
          image={loopstudiosone}
          title="Loopstudios"
          discraption="A website for a company that produces virtual world devices and is highly advanced in this field."
          github="https://github.com/MahmoudAbdullahAnani/loopstudiosOne"
          dom="https://loopstudiosone.netlify.app/"
        />
      </div>
    </div>
  );
}
 
export default Projects;