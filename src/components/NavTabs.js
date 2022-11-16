import React from "react";
import Animation from "../components/Animation";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-left sm:static sm:inset-auto sm:ml-0 sm:pr-0 sm:text-small">
              <div className="flex flex-shrink-0 items-left"></div>
              <Animation className="animation text-gray-300 sm:static sm:inset-auto sm:ml-0 sm:pr-0 sm:text-small"></Animation>
              <img
                className="h-11 w-10 ml-2 rounded-full"
                src={require("../Assets/Images/Running.gif")}
                alt="Your Company"
              ></img>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <a
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Home"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Home
                  </a> */}

                  <a
                    href="#AboutMe"
                    onClick={() => handlePageChange("Home")}
                    // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Home"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md bg-indigo-700 text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    About
                  </a>
                  <a
                    href="#Projects"
                    onClick={() => handlePageChange("Projects")}
                    // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Projects"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  bg-indigo-700 text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Portfolio{" "}
                  </a>

                  <a
                    href="#Skills"
                    onClick={() => handlePageChange("Skills")}
                    // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Skills"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  bg-indigo-700 text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Skills
                  </a>

                  <a
                    href="#Resume"
                    // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => handlePageChange("Resume")}
                    // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Resume"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md bg-indigo-700 text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Resume
                  </a>

                  <a
                    href="#Contact"
                    onClick={() => handlePageChange("Contact")}
                    // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Contact"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md bg-indigo-700 text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Contact
                  </a>
                  {/* <a
                    href="#Thank_You"
                    onClick={() => handlePageChange("Thank_You")}
                    // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    className={
                      currentPage === "Thank_You"
                        ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md bg-indigo-700 text-sm font-medium"
                        : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                  </a> */}
                </div>
              </div>
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={require("../Assets/Images/Kevin.JPG")}
                      alt=""
                    ></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("About")}
              // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              className={
                currentPage === "About"
                  ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              About Me
            </a>

            <a
              href="#Projects"
              onClick={() => handlePageChange("Projects")}
              // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              className={
                currentPage === "Projects"
                  ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Projects
            </a>

            <a
              href="#Skills"
              onClick={() => handlePageChange("Skills")}
              // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              className={
                currentPage === "Skills"
                  ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Skills
            </a>

            {/* <a
              href="#Resume"
              // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange("Resume")}
              // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              className={
                currentPage === "Resume"
                  ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md bg-indigo-700 text-sm font-medium"
                  : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Resume
            </a> */}
            <a
              href="#ContactMe"
              onClick={() => handlePageChange("Contact")}
              // class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              className={
                currentPage === "Contact"
                  ? "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "nav-link active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Contact Me
            </a>

            {/* <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
