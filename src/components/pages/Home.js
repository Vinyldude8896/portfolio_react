import React from "react";

const Home = () => {
  return (
    <section className="mx-auto mt-10 max-w-12xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-14 z-10">
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
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>

              {/* <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
            </div>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-14 lg:px-8 xl:mt-14">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block xl:inline pr-8">Kevin Reid </span>{" "}
                  <br></br>
                  <span className="text-indigo-600 xl:inline">
                    {" "}
                    Full Stack
                  </span>
                  <span className="text-indigo-600 xl:inline">
                    {" "}
                    Web Developer{" "}
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
                    className="h-55 w-120 "
                    src={require("../../Assets/Images/FullStackWebDevelopment.png")}
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
            src={require("../../Assets/Images/Kevin_4.JPG")}
            alt="Kevin"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
