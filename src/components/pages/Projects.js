import React, { useState } from "react";
import {Card} from "../Card"
import imageTechBlog from "../../Assets/ProjectPhotos/tech_blog.png";
import imageIbetter from "../../Assets/ProjectPhotos/IBetter.png";
import imageArtistMusicTours from "../../Assets/ProjectPhotos/Artist_music_tours_1.jpeg";
import imageWeatherDashboard from "../../Assets/ProjectPhotos/Weather_dashboard.jpeg";
import imageEmployeeTracker from "../../Assets/ProjectPhotos/Employee_Tracker.png"
import imageCodingQuiz from "../../Assets/ProjectPhotos/Coding_quiz.png"
import imageProduct_Paparazzi from "../../Assets/ProjectPhotos/product_paparazzi_4.jpg"
//

const projectArr = [
  {
    key: 1,
    src: imageTechBlog,
    title: "Blog Style App with secured login",
    hrefOne: "GitHub",
    hrefTwo: "Deployed App",
    GithubLink: "https://github.com/Vinyldude8896/The-Tech-Blog",
    deployedOrLiveLink: "https://immense-cliffs-94479.herokuapp.com/",
  },
  {
    key: 2,
    src: imageIbetter,
    title: "Habit Tracker app with chart progress",
    hrefOne: "GitHub",
    hrefTwo: "Deployed App",
    GithubLink: "https://github.com/Vinyldude8896/iBetter",
    deployedOrLiveLink: "https://ibetter.herokuapp.com",
  },
  {
    key: 3,
    src: imageArtistMusicTours,
    title: "Music Artist search returns concert listings, discography and videos",
    hrefOne: "GitHub",
    hrefTwo: "Live Github Link",
    GithubLink: "https://github.com/Vinyldude8896/Artist_Music_Tour",
    deployedOrLiveLink: "https://vinyldude8896.github.io/Artist_Music_Tour/",
  },
  {
    key: 4,
    src: imageWeatherDashboard,
    title: "Weather forecast app that calls API for city searched data",
    hrefOne: "GitHub",
    hrefTwo: "Live Github Link",
    GithubLink: "https://github.com/Vinyldude8896/Weather-Dashboard",
    deployedOrLiveLink: "https://vinyldude8896.github.io/Weather-Dashboard/",
  },
  {
    key: 5,
    src: imageEmployeeTracker,
    title: "Command line app to organize and maintain departments, managers and employees",
    hrefOne: "GitHub",
    hrefTwo: "Video Demo",
    GithubLink: "https://github.com/Vinyldude8896/Employee-Tracker",
    deployedOrLiveLink: "https://drive.google.com/file/d/1ziSfSc_Dury25gX0I-vqKOJPjDzP50Ao/view",
  },
  {
    key: 6,
    src: imageProduct_Paparazzi,
    title: "React App for Businesses to track wether their product is on retailer shelves",
    hrefOne: "GitHub",
    hrefTwo: "Live Github Link",
    GithubLink: "https://github.com/Vinyldude8896/product_paparazzi",
    deployedOrLiveLink: "https://productpaparazzi.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <section className="m-10">
    <div className="sm:text-center lg:text-left pb-3 z-10">
      <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        <span className="xl:inline pr-0">Welcome to my </span>
        <span className="text-indigo-600 xl:inline">Porfolio Section</span>
      </h1>
    </div>
    <main className="w-full flex flex-wrap mt-2 max-w-10xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-14 lg:px-8 xl:mt-14 z-10">
    
        {projectArr.map(x =>{
       return (
         <Card key={x.key} src={x.src} title={x.title} hrefOne={x.hrefOne} hrefTwo={x.hrefTwo} GithubLink={x.GithubLink} deployedOrLiveLink={x.deployedOrLiveLink}></Card>
       )
        })}
        </main>
    </section>
  );
};

export default Projects;
