import React, { useState } from "react";
import Modal from "../Modal";

const Projects = () => {
  return (
    <section>
      <div className="sm:text-center lg:text-left pb-3 z-10">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span className="xl:inline pr-0">Welcome to my </span>
          <span className="text-indigo-600 xl:inline">
            Porfolio Section
          </span>
        </h1>
      </div>
      <main className="w-full flex flex-wrap mt-10 max-w-10xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-14 lg:px-8 xl:mt-14 z-10">
        {/* <div className="w-full flex flex-wrap"> */}
          <div className=" w-full block flex flex-wrap card z-10">
            <div className="block-1 w-full pr-5 md:p-2 z-10">
              <img
                className="w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full z-10"
                src={require("../../Assets/ProjectPhotos/tech_blog.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap card z-10">
            <div className="block-1 w-full p-1 md:p-2 z-10">
              <img
                src={require("../../Assets/ProjectPhotos/IBetter.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap card z-10">
            <div className="block-1 w-full p-1 md:p-2 z-10">
              <img
                src={require("../../Assets/ProjectPhotos/Artist_music_tours_1.jpeg")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card z-10">
            <div className="block-1 w-full p-1 md:p-2 z-10">
              <img
                src={require("../../Assets/ProjectPhotos/Weather_dashboard.jpeg")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card z-10">
            <div className="block-1 w-full p-1 md:p-2 z-10">
              <img
                src={require("../../Assets/ProjectPhotos/Employee_Tracker.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card z-10">
            <div className="block-1 w-full p-1 md:p-2 z-10">
              <img
                src={require("../../Assets/ProjectPhotos/Coding_quiz.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
        {/* </div> */}
      </main>
    </section>
  );
};

export default Projects;
