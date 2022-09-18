import React  from "react";

const Home = () => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <section className="viewHeight">
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
                    <div className="flex w-full items-center justify-between md:w-auto">
                      {/* <a href="#">
                        <span class="sr-only">Your Company</span>
                        <img
                          alt="Your Company"
                          class="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        ></img>
                      </a> */}
                      <div className="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          {/* <!-- Heroicon name: outline/bars-3 --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  <a
                      href="https://github.com/Vinyldude8896" target="_blank" 
                      className="font-medium text-indigo-600 hover:text-gray-900"
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/kevinreidkr" target="_blank" 
                      className="font-medium text-indigo-600 hover:text-indigo-600"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://docs.google.com/document/d/1efYGed8JSc1yse8Gx0UbxpSvFESqX_M7/edit" target="_blank" 
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

                    {/* <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Log in
                    </a> */}
                  </div>
                </nav>
              </div>

              {/* <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
              <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    {/* <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      ></img>
                    </div> */}
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        {/* <!-- Heroicon name: outline/x-mark --> */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* <div className="sm:hidden space-y-1 px-2 pt-2 pb-3"> */}
                    {/* <a
                      href="#Github"
                      className="rounded-md px-3 py-2 font-bold text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    > */}
                    {/* <img
                      src={require("../../Assets/icons/github.png")}
                      className="w-20 mx-auto"
                      alt="JavaScript"
                    /> */}
                    {/* </a> */}

                    {/* <a
                      href="#Skills"
                      className="rounded-md px-3 py-2  font-bold text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Skills
                    </a> */}

                    {/* <a
                      href="#"
                      className="rounded-md px-3 py-2  font-bold text-base font-medium text-indigo-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Contact Me
                    </a> */}

                    {/* <a
                      href="#"
                      className="rounded-md px-3 py-2 text-base font-bold font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Resume
                    </a> */}
                  {/* </div> */}
                  {/* <a
                    href="#"
                    class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </div>

            <main className="mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="xl:inline pr-8">Kevin Reid </span>{" "}
                  <br></br>
                  <span className="text-indigo-600 xl:inline"> Full Stack</span>
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
                    className="h-55 w-2/3 "
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
