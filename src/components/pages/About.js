import React, { useState } from 'react';

const About = () => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <section className="viewheight">
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto"></div>
                  </div>
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                    <a
                      href="https://github.com/Vinyldude8896"
                      target="_blank"
                      className="font-large text-indigo-600 hover:text-gray-900"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kevinreidkr"
                      target="_blank"
                      className="font-medium text-indigo-600 hover:text-indigo-600"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://docs.google.com/document/d/1srngyW9U_5NCMyunlWPw1QzV6TTfHFmWZ9B6iGlGvpU/edit?usp=sharing"
        
                      target="_blank"
                      className="font-medium text-indigo-600 hover:text-indigo-600"
                    >
                      Resume
                    </a>
                    <a
                      href="mailto: kevinnivek@me.com"
                      className="font-medium text-indigo-600 hover:text-gray-900"
                    >
                      E-mail
                    </a>
                  </div>
                </nav>
              </div>
              <div className="aboutSubmenu space-y-1 px-2 pt-2 pb-3">
                <a
                  href="#Github"
                  className="block rounded-md px-3 py-2 font-bold text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <img
                    src={require('../../Assets/icons/github.png')}
                    className="w-20 mx-auto"
                    alt="JavaScript"
                  />
                </a>
                <a
                  href="#Skills"
                  className="block rounded-md px-3 py-2  font-bold text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2  font-bold text-base font-medium text-indigo-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-bold font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  Resume
                </a>
              </div>
            </div>

            <main className="mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="xl:inline pr-8">Kevin Reid </span> <br></br>
                  <span className="text-indigo-600 xl:inline"> Full Stack</span>
                  <span className="text-indigo-600 xl:inline">
                    {' '}
                    Web Developer{' '}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  I find programming to be challenging, but greatly rewarding. I
                  love the creativity of building our own front and back end
                  apps from the ground up. I really enjoy the problem solving
                  nature of programming, and the endless opportunities to create
                  responsive designs that generate a great user experience. I
                  enjoy other creative arts, music, photography and video games.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <img
                    className="h-55 w-2/3 "
                    src={require('../../Assets/Images/FullStackWebDevelopment.png')}
                    alt=""
                  ></img>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-45 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={require('../../Assets/Images/Kevin_4.JPG')}
            alt="Kevin"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default About;
