import React from "react";
import RecipeReviewCard from "../../Components/CardeComp-B";
import ecommers from "../../Image/projects/e-commers.jpg";
import fylo from "../../Image/projects/fylo.jpg";
import moslem from "../../Image/projects/moslem.jpg";
import green from "../../Image/projects/green.jpg";
import lebsokm from "../../Image/projects/lebsokm.jpg";
import loopstudiosone from "../../Image/projects/loopstudiosone..jpg";
import azkar from "../../Image/projects/azkar.jpg";
import aleinani from "../../Image/projects/aleinani.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="bg-dark">
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: -100, opacity: 1 }}
        transition={{ duration: 0.7, type: "just" }}
        whileInView={{ x: 0 }}
        className="container py-4 row justify-content-around mx-auto gap-4"
      >
        <RecipeReviewCard
          number="1/8"
          image={ecommers}
          title="Flashye"
          discraption="A website for selling clothes, you can order the product and shop through this website."
          github="https://github.com/MahmoudAbdullahAnani/e-commers-flashye"
          dom="https://e-commers-flashye.vercel.app/"
        />
        <RecipeReviewCard
          number="2/6"
          image={fylo}
          title="Fylo"
          discraption="It is a website that displays the capabilities of a company that works on hosting and protecting files."
          github="https://github.com/MahmoudAbdullahAnani/Fylo-React-Project"
          dom="https://fylo-react-project.vercel.app/"
        />
        <RecipeReviewCard
          number="3/8"
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
          number="5/8"
          image={lebsokm}
          title="Lebsokm"
          discraption="It is a large clothing store that belongs to a company dedicated to selling clothes based in Dubai."
          github="https://github.com/MahmoudAbdullahAnani/front-lebsokm"
          dom="https://gs6ngz6ttvjnu8svwz6hfw.on.drv.tw/New_front-lebskom/front-lebskom/front-lebsokm/Homepage_1/"
        />
        <RecipeReviewCard
          number="6/8"
          image={loopstudiosone}
          title="Loopstudios"
          discraption="A website for a company that produces virtual world devices and is highly advanced in this field."
          github="https://github.com/MahmoudAbdullahAnani/loopstudiosOne"
          dom="https://loopstudios-one-delta.vercel.app/"
        />
        <RecipeReviewCard
          number="7/8"
          image={azkar}
          title="Azkar"
          discraption="This project is an electronic rosary that works and contains the morning, evening and waking remembrances, and we aspire to add many features that work for the benefit of the Islamic nation."
          github="https://github.com/MahmoudAbdullahAnani/azkar"
          dom="https://azkar-seven.vercel.app/"
        />

        <RecipeReviewCard
          number="8/8"
          image={aleinani}
          title="Aleinani"
          discraption="This site introduces others to Al-Anani Company, which is characterized by a long experience of more than 20 years in paints and finishing."
          github="https://github.com/MahmoudAbdullahAnani/Aleinani"
          dom="https://aleinani.vercel.app/"
        />
      </motion.div>
    </div>
  );
}
 
export default Projects;