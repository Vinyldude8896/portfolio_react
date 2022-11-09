import React from "react";
import {Skill} from "../Skill";

// importing imageds for skills cards
import imageJavaScript from "../../Assets/icons/javascript.png";
import imageHTML from "../../Assets/icons/html5.png";
import imageCSS from "../../Assets/icons/css3.png";
import imageBootstrap from "../../Assets/icons/bootstrap.png";
import imageTailwind from "../../Assets/icons/tailwind-css.png";
import imageJquery from "../../Assets/icons/jquery.png";
import imageNode from "../../Assets/icons/node-js.png";
import imageReact from "../../Assets/icons/react.png";
import imageExpress from "../../Assets/icons/express.png";
import imageHandlebars from "../../Assets/icons/handlebars.png";
import imageMysql from "../../Assets/icons/mysql.png";
import imageSequelize from "../../Assets/icons/sequelize.png";
import imageMongoDB from "../../Assets/icons/mongodb.png";
import imageMoonse from "../../Assets/icons/Mongoose.png";
import imageIndexedDB from "../../Assets/icons/Indexeddb.jpeg"

//array for skills card items includes image name, alt text and hh1 text
const skillsArr = [
{
  key: 1,
  src: imageJavaScript,
  alt: "JavaScript",
  h1Text: "JavaScript",
},
{
  key: 2,
  src: imageHTML,
  alt: "HTML",
  h1Text: "HTML",
},
{
  key: 3,
  src: imageCSS,
  alt: "CSS",
  h1Text: "CSS",
},
{
  key: 4,
  src: imageBootstrap,
  alt: "Bootstrap",
  h1Text: "Bootstrap",
},
{
  key: 5,
  src: imageTailwind,
  alt: "Tailwind",
  h1Text: "Tailwind",
},
{
  key: 6,
  src: imageJquery,
  alt: "jQuery",
  h1Text: "jQuery",
},
{
  key: 7,
  src: imageNode,
  alt: "Node",
  h1Text: "Node",
},
{
  key: 8,
  src: imageReact,
  alt: "React",
  h1Text: "React",
},
{
  key: 9,
  src: imageExpress,
  alt: "Express",
  h1Text: "Express",
},
{
  key: 10,
  src: imageHandlebars,
  alt: "Handlebars",
  h1Text: "Handlebars",
},
{
  key: 11,
  src: imageMysql,
  alt: "MySQL",
  h1Text: "MySQL",
},
{
  key: 12,
  src: imageSequelize,
  alt: "Sequelize",
  h1Text: "Sequelize",
},
{
  key: 13,
  src: imageMongoDB,
  alt: "MongoDB",
  h1Text: "MongoDB",
},
{
  key: 14,
  src: imageMoonse,
  alt: "Mongoose",
  h1Text: "Mongoose",
},
{
  key: 15,
  src: imageIndexedDB,
  alt: "IndexedDB",
  h1Text: "IndexedDB",
},
]


// Skills function which will create outer section and call Skill function for each skill in array
const Skills = () => {
  return (
    <section
      id="Skills"
      className="skillsContainer mx-auto max-w-12xl px-4"
    >
      <div className=" sm:text-center lg:text-left pb-3">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          {/* <span className="xl:inline pr-0">Welcome to my </span> */}
          <span className="skillTitle text-indigo-600 xl:inline">Here are some of my current skills</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-4 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">

        {skillsArr.map(x => {
          return (
            <Skill key={x.key} src={x.src} alt={x.alt} h1Text={x.h1Text}></Skill>
          )
        })}
      </div>
    </section>
  );
};

export default Skills;
