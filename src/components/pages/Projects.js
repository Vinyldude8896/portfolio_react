import React, { useState } from "react";
import Modal from "../Modal";

const Projects = () => {
  return (
    <section>
      <div className="sm:text-center lg:text-left pb-3 z-10">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span className="xl:inline pr-0">Welcome to my </span>
          <span className="text-indigo-600 xl:inline">Porfolio Section</span>
        </h1>
      </div>
      <main className="w-full flex flex-wrap mt-2 max-w-10xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-14 lg:px-8 xl:mt-14 z-10">
        {/* <div className="w-full flex flex-wrap"> */}
        <div className=" w-full block flex flex-wrap card z-10">
          <div className="block-1 w-full text-center pr-5 md:p-2 z-10">
            <img
              className="w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full z-10"
              src={require("../../Assets/ProjectPhotos/tech_blog.png")}
              title="Blog Style App with secured login"
            ></img>
            {/* <p
            className="font-medium ml-18 text-grey-600 hover:text-grey-900">
            Blog Style App with login</p> */}
            <a
              href="https://github.com/Vinyldude8896/The-Tech-Blog"
              target="_blank"
              className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900"
            >
              GitHub
            </a>
            <a
              href="https://immense-cliffs-94479.herokuapp.com/"
              target="_blank"
              className="font-medium font-bold text-indigo-600 hover:text-indigo-900"
            >
              Deployed App
            </a>
          </div>
          <div className="block-2"></div>
          <div className="block-3"></div>
          <div className="block-4"></div>
          <div className="block-5"></div>
        </div>
        <div className="block flex flex-wrap text-center card z-10">
          <div className="block-1 w-full p-1 md:p-2 z-10">
            <img
              src={require("../../Assets/ProjectPhotos/IBetter.png")}
              title="Habit Tracker app with chart progress"
            ></img>
            <a
              href="https://github.com/Vinyldude8896/iBetter"
              target="_blank"
              className="font-medium font-bold mr-5 text-center text-indigo-600 hover:text-indigo-900"
            >
              GitHub
            </a>
            <a
              href="https://ibetter.herokuapp.com"
              target="_blank"
              className="font-medium font-bold text-center text-indigo-600 hover:text-indigo-900"
            >
              Deployed App
            </a>
          </div>
          <div className="block-2"></div>
          <div className="block-3"></div>
          <div className="block-4"></div>
          <div className="block-5"></div>
        </div>
        <div className="block flex text-center flex-wrap card z-10">
          <div className="block-1 w-full p-1 md:p-2 z-10">
            <img
              src={require("../../Assets/ProjectPhotos/Artist_music_tours_1.jpeg")}
              title="Music Artist search returns concert listings, discography and videos"
            ></img>
            <a
              href="https://github.com/Vinyldude8896/Artist_Music_Tour"
              target="_blank"
              className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900"
            >
              GitHub
            </a>
            <a
              href="https://vinyldude8896.github.io/Artist_Music_Tour/"
              target="_blank"
              className="font-medium font-bold text-indigo-600 hover:text-indigo-900"
            >
              Live Github Link
            </a>
          </div>
          <div className="block-2"></div>
          <div className="block-3"></div>
          <div className="block-4"></div>
          <div className="block-5"></div>
        </div>
        <div className="block flex text-center flex-wrap w-1/3 card z-10">
          <div className="block-1 w-full p-1 md:p-2 z-10">
            <img
              src={require("../../Assets/ProjectPhotos/Weather_dashboard.jpeg")}
              title="Weather forecast app that calls API for city searched data"
            ></img>
            <a
              href="https://github.com/Vinyldude8896/Weather-Dashboard"
              target="_blank"
              className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900"
            >
              GitHub
            </a>
            <a
              href="https://vinyldude8896.github.io/Weather-Dashboard/"
              target="_blank"
              className="font-medium font-bold text-indigo-600 hover:text-indigo-900"
            >
              Live Github Link
            </a>
          </div>
          <div className="block-2"></div>
          <div className="block-3"></div>
          <div className="block-4"></div>
          <div className="block-5"></div>
        </div>
        <div className="block flex text-center flex-wrap w-1/3 card z-10">
          <div className="block-1 w-full p-1 md:p-2 z-10">
            <img
              src={require("../../Assets/ProjectPhotos/Employee_Tracker.png")}
              title="Command line app to organize and maintain departments, managers and employees"
            ></img>
            <a
              href="https://github.com/Vinyldude8896/Employee-Tracker"
              target="_blank"
              className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1ziSfSc_Dury25gX0I-vqKOJPjDzP50Ao/view"
              target="_blank"
              className="font-medium font-bold text-indigo-600 hover:text-indigo-900"
            >
              Video Demo
            </a>
          </div>
          <div className="block-2"></div>
          <div className="block-3"></div>
          <div className="block-4"></div>
          <div className="block-5"></div>
        </div>
        <div className="block flex text-center flex-wrap w-1/3 card z-10">
          <div className="block-1 w-full p-1 md:p-2 z-10">
            <img
              src={require("../../Assets/ProjectPhotos/Coding_quiz.png")}
              title="Coding quiz aqp that is timed and saves high score"
            ></img>
            <a
              href="https://github.com/Vinyldude8896/Coding-Quiz"
              target="_blank"
              className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900"
            >
              GitHub
            </a>
            <a
              href="https://vinyldude8896.github.io/Coding-Quiz/"
              target="_blank"
              className="font-medium font-bold text-indigo-600 hover:text-indigo-900"
            >
             Live Github Link
            </a>
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
