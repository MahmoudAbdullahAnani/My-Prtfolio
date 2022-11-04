import React from "react";
import RecipeReviewCard from "../../Components/Carde-Comp-P";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="bg-dark ">
      {/* propses: number, image, title, LinkedIn */}
      <div className="container py-4 row justify-content-around mx-auto gap-4">
        <RecipeReviewCard
          number="1"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQEVR-FCXlm04w/feedshare-shrink_1280/0/1665461049736?e=1670457600&v=beta&t=DALo2I_FgGTl99lOrXmgXmeJ3XCHKQdIjhTd5pMyWtc"
          title="this is title"
          LinkedIn=""
        />
        <RecipeReviewCard
          number="1"
          image=""
          title="this is title"
          LinkedIn=""
        />
        <RecipeReviewCard
          number="1"
          image=""
          title="this is title"
          LinkedIn=""
        />
        <RecipeReviewCard
          number="1"
          image=""
          title="this is title"
          LinkedIn=""
        />
        <RecipeReviewCard
          number="1"
          image=""
          title="this is title"
          LinkedIn=""
        />
        <RecipeReviewCard
          number="1"
          image=""
          title="this is title"
          LinkedIn=""
        />
      </div>
    </div>
  );
};

export default Blogs;
