import RecipeReviewCard from "../../../Components/CardeComp-B";

// images
import ecommers from "../../../Image/projects/e-commers.jpg";
import fylo from "../../../Image/projects/fylo.jpg";
import moslem from "../../../Image/projects/moslem.jpg";
import green from "../../../Image/projects/green.jpg";
import lebsokm from "../../../Image/projects/lebsokm.jpg";
import loopstudiosone from "../../../Image/projects/loopstudiosone..jpg";
import azkar from "../../../Image/projects/azkar.jpg";
import aleinani from "../../../Image/projects/aleinani.jpg";
import octopus from "../../../Image/projects/octopus-shop.png";
import alanani from "../../../Image/projects/alanani.png";
import tasks from "../../../Image/projects/tasks.png";
// Back
import mma from "../../../Image/projects/mma.png";
import todolist from "../../../Image/projects/todolist.png";

export const totalProjects = "14";
const totalFrontProjects = "11";
const totalBackProjects = "3";
const totalFullProjects = "3";

export const frontProjects = () => {
  return (
    <div className="container py-4 row justify-content-around mx-auto gap-4">
      <RecipeReviewCard
        number={`1/${totalFrontProjects}`}
        image={octopus}
        title="Octopus-Shop"
        discraption="It is an electronic selling website that was created with Next.js, and the user registers an account, then logs in, then does shopping."
        github="https://github.com/MahmoudAbdullahAnani/OctopusShop"
        dom="https://octopus-shop.vercel.app"
      />
      <RecipeReviewCard
        number={`2/${totalFrontProjects}`}
        image={alanani}
        title="Al-Anani"
        discraption="Al-Anani website introduces the user to Al-Anani company, which operates in several fields."
        github="https://github.com/MahmoudAbdullahAnani/Alanani"
        dom="https://alanani.vercel.app/"
      />
      <RecipeReviewCard
        number={`3/${totalFrontProjects}`}
        image={tasks}
        title="Taskes"
        discraption="Application tasks. The tasks you want to complete are added. This site supports the PWA feature. A copy of this application was made on Android using React-Native."
        github="https://github.com/MahmoudAbdullahAnani/TaskesList"
        dom="https://taskes-list.vercel.app/"
      />
      <RecipeReviewCard
        number={`4/${totalFrontProjects}`}
        image={ecommers}
        title="Flashye"
        discraption="A website for selling clothes, you can order the product and shop through this website."
        github="https://github.com/MahmoudAbdullahAnani/e-commers-flashye"
        dom="https://e-commers-flashye.vercel.app/"
      />
      <RecipeReviewCard
        number={`5/${totalFrontProjects}`}
        image={fylo}
        title="Fylo"
        discraption="It is a website that displays the capabilities of a company that works on hosting and protecting files."
        github="https://github.com/MahmoudAbdullahAnani/Fylo-React-Project"
        dom="https://fylo-react-project.vercel.app/"
      />
      <RecipeReviewCard
        number={`6/${totalFrontProjects}`}
        image={moslem}
        title="Prayer"
        discraption="It is a website that displays prayer times according to the city that is chosen."
        github="https://github.com/MahmoudAbdullahAnani/Prayer-Timings"
        dom="https://my-prayer.netlify.app/"
      />
      <RecipeReviewCard
        number={`7/${totalFrontProjects}`}
        image={green}
        title="Green Candles"
        discraption="Green Candles is one of the leading marketing management companies in the United Arab Emirates specialized in digital and electronic marketing."
        github="https://github.com/MahmoudAbdullahAnani/Green-Candles"
        dom="https://greencandles-m.com/"
      />
      <RecipeReviewCard
        number={`8/${totalFrontProjects}`}
        image={lebsokm}
        title="Lebsokm"
        discraption="It is a large clothing store that belongs to a company dedicated to selling clothes based in Dubai."
        github="https://github.com/MahmoudAbdullahAnani/front-lebsokm"
        dom="https://gs6ngz6ttvjnu8svwz6hfw.on.drv.tw/New_front-lebskom/front-lebskom/front-lebsokm/Homepage_1/"
      />
      <RecipeReviewCard
        number={`9/${totalFrontProjects}`}
        image={loopstudiosone}
        title="Loopstudios"
        discraption="A website for a company that produces virtual world devices and is highly advanced in this field."
        github="https://github.com/MahmoudAbdullahAnani/loopstudiosOne"
        dom="https://loopstudios-one-delta.vercel.app/"
      />
      <RecipeReviewCard
        number={`10/${totalFrontProjects}`}
        image={azkar}
        title="Azkar"
        discraption="This project is an electronic rosary that works and contains the morning, evening and waking remembrances, and we aspire to add many features that work for the benefit of the Islamic nation."
        github="https://github.com/MahmoudAbdullahAnani/azkar"
        dom="https://azkar-seven.vercel.app/"
      />

      <RecipeReviewCard
        number={`11/${totalFrontProjects}`}
        image={aleinani}
        title="Aleinani"
        discraption="This site introduces others to Al-Anani Company, which is characterized by a long experience of more than 20 years in paints and finishing."
        github="https://github.com/MahmoudAbdullahAnani/Aleinani"
        dom="https://aleinani.vercel.app/"
      />
    </div>
  );
};
export const backProjects = () => {
  return (
    <div className="container py-4 row justify-content-around mx-auto gap-4">
      <RecipeReviewCard
        number={`1/${totalBackProjects}`}
        image={todolist}
        title="Todolist-Back-End"
        discraption="A backend was built for an application that sells products. It was built at the highest level and with very high quality. Several powerful features were added to it. I cannot count them all. You can look at the postman for more information.(Node.js)"
        github="https://github.com/MahmoudAbdullahAnani/build-ecommerce-api-using-nodejs"
        dom="https://planetary-spaceship-129073.postman.co/workspace/My-Workspace~6a71f689-1b92-4d14-880b-7d30d991df13/collection/23028124-1d0a7853-e3d3-4481-8467-b1f1d434b693?action=share&creator=23028124"
      />

      <RecipeReviewCard
        number={`2/${totalBackProjects}`}
        image={mma}
        title="MMA"
        discraption="It is an application that manages the products of a commercial store that publishes its products electronically with some other powerful features.(PHP)
        
    - Sign In & Sign Up.
    - Sign In Admin & Sign Up Admin.
    - Dashboard.
    - Page Account Setting.
    - Home Page [ View Products ].
    - CRUD Operations.
       (لا يعمل في الوقت الحالي)
        "
        github="https://github.com/MahmoudAbdullahAnani/E-Commerce-php"
        dom="https://github.com/MahmoudAbdullahAnani/E-Commerce-php"
      />
      <RecipeReviewCard
        number={`3/${totalBackProjects}`}
        image={todolist}
        title="Todolist-Back-End"
        discraption="Back and Label is a todolist in which the user enters several lists that he can control as well, as they can be deleted or modified.(PHP)"
        github="https://github.com/MahmoudAbdullahAnani/todolist"
        dom="https://github.com/MahmoudAbdullahAnani/todolist"
      />
    </div>
  );
};
export const fullProjects = () => {
  return (
    <div className="container py-4 row justify-content-around mx-auto gap-4">
      <RecipeReviewCard
        number={`1/${totalFullProjects}`}
        image={octopus}
        title="Octopus-Shop"
        discraption="It is an electronic selling website that was created with Next.js, and the user registers an account, then logs in, then does shopping."
        github="https://github.com/MahmoudAbdullahAnani/OctopusShop"
        dom="https://octopus-shop.vercel.app"
      />
      <RecipeReviewCard
        number={`2/${totalFullProjects}`}
        image={tasks}
        title="Taskes"
        discraption="Application tasks. The tasks you want to complete are added. This site supports the PWA feature. A copy of this application was made on Android using React-Native."
        github="https://github.com/MahmoudAbdullahAnani/TaskesList"
        dom="https://taskes-list.vercel.app/"
      />
      <RecipeReviewCard
        number={`3/${totalFullProjects}`}
        image={aleinani}
        title="Aleinani"
        discraption="This site introduces others to Al-Anani Company, which is characterized by a long experience of more than 20 years in paints and finishing."
        github="https://github.com/MahmoudAbdullahAnani/Aleinani"
        dom="https://aleinani.vercel.app/"
      />
    </div>
  );
};
export const allProjects = () => {
  return (
    <div className="container py-4 row justify-content-around mx-auto gap-4">
      <RecipeReviewCard
        number={`1/${totalProjects}`}
        image={todolist}
        title="Todolist-Back-End"
        discraption="A backend was built for an application that sells products. It was built at the highest level and with very high quality. Several powerful features were added to it. I cannot count them all. You can look at the postman for more information.(Node.js)"
        github="https://github.com/MahmoudAbdullahAnani/build-ecommerce-api-using-nodejs"
        dom="https://planetary-spaceship-129073.postman.co/workspace/My-Workspace~6a71f689-1b92-4d14-880b-7d30d991df13/collection/23028124-1d0a7853-e3d3-4481-8467-b1f1d434b693?action=share&creator=23028124"
      />

      <RecipeReviewCard
        number={`2/${totalProjects}`}
        image={mma}
        title="MMA"
        discraption="It is an application that manages the products of a commercial store that publishes its products electronically with some other powerful features.(PHP)
        
    - Sign In & Sign Up.
    - Sign In Admin & Sign Up Admin.
    - Dashboard.
    - Page Account Setting.
    - Home Page [ View Products ].
    - CRUD Operations.
       (لا يعمل في الوقت الحالي)
        "
        github="https://github.com/MahmoudAbdullahAnani/E-Commerce-php"
        dom="https://github.com/MahmoudAbdullahAnani/E-Commerce-php"
      />
      <RecipeReviewCard
        number={`3/${totalProjects}`}
        image={todolist}
        title="Todolist-Back-End"
        discraption="Back and Label is a todolist in which the user enters several lists that he can control as well, as they can be deleted or modified.(PHP)"
        github="https://github.com/MahmoudAbdullahAnani/todolist"
        dom="https://github.com/MahmoudAbdullahAnani/todolist"
      />
      <RecipeReviewCard
        number={`4/${totalProjects}`}
        image={octopus}
        title="Octopus-Shop"
        discraption="It is an electronic selling website that was created with Next.js, and the user registers an account, then logs in, then does shopping."
        github="https://github.com/MahmoudAbdullahAnani/OctopusShop"
        dom="https://octopus-shop.vercel.app"
      />
      <RecipeReviewCard
        number={`5/${totalProjects}`}
        image={alanani}
        title="Al-Anani"
        discraption="Al-Anani website introduces the user to Al-Anani company, which operates in several fields."
        github="https://github.com/MahmoudAbdullahAnani/Alanani"
        dom="https://alanani.vercel.app/"
      />
      <RecipeReviewCard
        number={`6/${totalProjects}`}
        image={tasks}
        title="Taskes"
        discraption="Application tasks. The tasks you want to complete are added. This site supports the PWA feature. A copy of this application was made on Android using React-Native."
        github="https://github.com/MahmoudAbdullahAnani/TaskesList"
        dom="https://taskes-list.vercel.app/"
      />
      <RecipeReviewCard
        number={`7/${totalProjects}`}
        image={ecommers}
        title="Flashye"
        discraption="A website for selling clothes, you can order the product and shop through this website."
        github="https://github.com/MahmoudAbdullahAnani/e-commers-flashye"
        dom="https://e-commers-flashye.vercel.app/"
      />
      <RecipeReviewCard
        number={`8/${totalProjects}`}
        image={fylo}
        title="Fylo"
        discraption="It is a website that displays the capabilities of a company that works on hosting and protecting files."
        github="https://github.com/MahmoudAbdullahAnani/Fylo-React-Project"
        dom="https://fylo-react-project.vercel.app/"
      />
      <RecipeReviewCard
        number={`9/${totalProjects}`}
        image={moslem}
        title="Prayer"
        discraption="It is a website that displays prayer times according to the city that is chosen."
        github="https://github.com/MahmoudAbdullahAnani/Prayer-Timings"
        dom="https://my-prayer.netlify.app/"
      />
      <RecipeReviewCard
        number={`10/${totalProjects}`}
        image={green}
        title="Green Candles"
        discraption="Green Candles is one of the leading marketing management companies in the United Arab Emirates specialized in digital and electronic marketing."
        github="https://github.com/MahmoudAbdullahAnani/Green-Candles"
        dom="https://greencandles-m.com/"
      />
      <RecipeReviewCard
        number={`11/${totalProjects}`}
        image={lebsokm}
        title="Lebsokm"
        discraption="It is a large clothing store that belongs to a company dedicated to selling clothes based in Dubai."
        github="https://github.com/MahmoudAbdullahAnani/front-lebsokm"
        dom="https://gs6ngz6ttvjnu8svwz6hfw.on.drv.tw/New_front-lebskom/front-lebskom/front-lebsokm/Homepage_1/"
      />
      <RecipeReviewCard
        number={`12/${totalProjects}`}
        image={loopstudiosone}
        title="Loopstudios"
        discraption="A website for a company that produces virtual world devices and is highly advanced in this field."
        github="https://github.com/MahmoudAbdullahAnani/loopstudiosOne"
        dom="https://loopstudios-one-delta.vercel.app/"
      />
      <RecipeReviewCard
        number={`13/${totalProjects}`}
        image={azkar}
        title="Azkar"
        discraption="This project is an electronic rosary that works and contains the morning, evening and waking remembrances, and we aspire to add many features that work for the benefit of the Islamic nation."
        github="https://github.com/MahmoudAbdullahAnani/azkar"
        dom="https://azkar-seven.vercel.app/"
      />

      <RecipeReviewCard
        number={`14/${totalProjects}`}
        image={aleinani}
        title="Aleinani"
        discraption="This site introduces others to Al-Anani Company, which is characterized by a long experience of more than 20 years in paints and finishing."
        github="https://github.com/MahmoudAbdullahAnani/Aleinani"
        dom="https://aleinani.vercel.app/"
      />
    </div>
  );
};
