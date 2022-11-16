import React from "react";
import RecipeReviewCard from "../../Components/Carde-Comp-P";
import githubVS from "../../Image/Blogs/github-vs.jpg"
import Hoisting from "../../Image/Blogs/305101572_174922891764007_2480689577101089611_n.jpg"
import roadmapreact from "../../Image/Blogs/roadmap-react.jpg"
import "./Blogs.css";
const Blogs = () => {
  const selector = `You have met selectors already. A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them. The element or elements which are selected by the selector are referred to as the subject of the selector.`;
  const math = `Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.`;
  const string = `Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.`;
  const arry = `The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations In JavaScript, arrays aren't primitives but are instead Array objects with the following core`;
  const github = `Sometimes uploading the initiation to GitHub requires a lot of trouble, but with this idea, you will be able to upload the site on GitHub. Simply follow the article.`;
  const suger = `Sometimes the numbers that we use in our code are unbalanced or unbalanced. At this time, programming languages provide us with what is called the sugar of numbers, which allows us to distort the form of displaying slugs in our application.`;
  const reactBackend = `top 5 frameworks that will help you in backend work with React`;
  const hoistingJS = `The hoisting in javaScript is that all variables and functions, or in other words, all declarations in the Scope, are raised according to where I define variables or functions, whether it is a global scope or function scope.`;
  const roadmapReact = `1) You will start to learn the basics and understand what is reaction and understand what is the state and props and lifecycle and render and lists, keys and routing and understand all this night
2) You begin to understand the Hooks and the Functional Component and what they are useful for
And you understand all the hooks like useState , useEffect , useContext and all that
3) You begin to know the more advanced things, which are:
higher order comp , render props , context Api , and Pure Comp`;
  return (
    <div className="bg-dark ">
      {/* propses: number, image, title, dicreption LinkedIn */}
      <div className="container py-4 row justify-content-around mx-auto gap-4">
        <RecipeReviewCard
          number="1/9"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQGhgWjorWYseA/feedshare-shrink_1280/0/1654395297649?e=1671667200&v=beta&t=zGwQy6_v2dR2BOx9nurYLa5DfRKrVCsAJezefYsXUWc"
          title="What is a selector?"
          dicreption={`${selector.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_css-activity-6939036818143092736-zne7?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="2/9"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQFF6IqH7NyBNQ/feedshare-shrink_1280/0/1654512470537?e=1671667200&v=beta&t=XoQgQkHV8FrLqBRXdqMhLXPWxDwgxsrmkvjKexv7yoY"
          title="What is Math Functions?"
          dicreption={`${math.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_javascript-activity-6939528331692244992-byBi?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="3/9"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQEraOyjCGyJ6g/feedshare-shrink_1280/0/1655186766749?e=1671667200&v=beta&t=XvRN0S63rbXc5nRZXp-m9AgwsoOoQHdkt_M5mfq1zeM"
          title="What is String Functions?"
          dicreption={`${string.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_javascript-activity-6942356516209324032-T5Or?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="4/9"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQF5C_gugBskgQ/feedshare-shrink_1280/0/1655577549125?e=1671667200&v=beta&t=xtnewFEIbIZcYOPdyeGga917YXqRx_ygQPjjFMVd8OM"
          title="What is Array Functions?"
          dicreption={`${arry.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_javascript-activity-6943995566615859201-xcoQ?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="5/9"
          image={githubVS}
          title="Upload the site to GitHub?"
          dicreption={`${github.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_%D8%B1%D9%81%D8%B9-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%B9%D9%84%D9%8A-github-%D8%A8%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-vs-code-activity-6955794281714384897-Debv?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="6/9"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQEVR-FCXlm04w/feedshare-shrink_800/0/1665461049736?e=1671667200&v=beta&t=7gWy0HAwdegFboOUIrTOmD7Pdb3fND2WJniNx70Nj0o"
          title="What is Sugar Numbers?"
          dicreption={`${suger.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_reactjs-export-commerce-activity-6985449949022810112--lch?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="7/9"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQGo7F4RMXN2iQ/feedshare-shrink_1280/0/1666701543417?e=1671667200&v=beta&t=lD3A54-L5c-mH5Svpxy4McErzIx-X6apyya2vd_gc90"
          title="Who are Top 5 React BackEnd?"
          dicreption={`${reactBackend.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_react-nodejs-expressjs-activity-6990652975006273536-3swl?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="8/9"
          image={Hoisting}
          title="What is Hoisting in JavaScript?"
          dicreption={`${hoistingJS.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_hoisting-mdn-web-docs-glossarycolon-definitions-activity-6992248179110866944-eZaZ?utm_source=share&utm_medium=member_desktop"
        />
        <RecipeReviewCard
          number="9/9"
          image={roadmapreact}
          title="Roadmap React!"
          dicreption={`${roadmapReact.slice(0, 60)}...`}
          LinkedIn="https://www.linkedin.com/posts/mahmoud-abdullah-ab253920b_react-class-hooks-full-tutorial-2022-activity-6998015782060212224-8xqF?utm_source=share&utm_medium=member_desktop"
        />
      </div>
    </div>
  );
};

export default Blogs;
