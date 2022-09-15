import React, { useState } from "react";
import Modal from "../Modal";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="mx-auto mt-10 max-w-12xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-14"
    >
      <div className="sm:text-center lg:text-left pb-3">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span className="block xl:inline pr-0">Welcome to my </span>
          <span className="block text-indigo-600 xl:inline">
            Projects Section
          </span>
        </h1>
      </div>
      <div className="container px-5 py-4 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">

          <div className="block flex flex-wrap w-1/3 card ">
            <div className="block-1 w-full p-1 md:p-2">
              <img className="w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                src={require("../../Assets/ProjectPhotos/tech_blog.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card">
            <div className="block-1 w-full p-1 md:p-2">
              <img
                src={require("../../Assets/ProjectPhotos/IBetter.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card">
            <div className="block-1 w-full p-1 md:p-2">
              <img
                src={require("../../Assets/ProjectPhotos/Artist_music_tours_1.jpeg")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card">
            <div className="block-1 w-full p-1 md:p-2">
              <img
                src={require("../../Assets/ProjectPhotos/Weather_dashboard.jpeg")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card">
            <div className="block-1 w-full p-1 md:p-2">
              <img
                src={require("../../Assets/ProjectPhotos/Employee_Tracker.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
          <div className="block flex flex-wrap w-1/3 card">
            <div className="block-1 w-full p-1 md:p-2">
              <img
                src={require("../../Assets/ProjectPhotos/Coding_quiz.png")}
              ></img>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
