import React from "react";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="mx-auto mt-10 max-w-12xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-14"
    >
      <div className=" sm:text-center lg:text-left pb-3">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span className="xl:inline pr-0">Welcome to my </span>
          <span className="text-indigo-600 xl:inline">Skills Section</span>
        </h1>
      </div>
      <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {/* <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500">
          <h1>JavaScript</h1>
          <img
            className="w-20 mx-auto"
            src={require("../../Assets/icons/javascript (1).png")}
          ></img>
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
        </div> */}
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">JavaScript</h1>
          <img
           src={require("../../Assets/icons/javascript.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">HTML</h1>
          <img
           src={require("../../Assets/icons/html5.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">CSS</h1>
          <img
           src={require("../../Assets/icons/css3.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">jQuery</h1>
          <img
           src={require("../../Assets/icons/jquery.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Node</h1>
          <img
           src={require("../../Assets/icons/node-js.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">React</h1>
          <img
           src={require("../../Assets/icons/react.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Express</h1>
          <img
           src={require("../../Assets/icons/express.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Handlebars</h1>
          <img
           src={require("../../Assets/icons/handlebars.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Bootstrap</h1>
          <img
           src={require("../../Assets/icons/bootstrap.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Tailwind</h1>
          <img
           src={require("../../Assets/icons/tailwind-css.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">MongoDB</h1>
          <img
           src={require("../../Assets/icons/mongodb.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Mongoose</h1>
          <img
           src={require("../../Assets/icons/Mongoose.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">IndexedDB</h1>
          <img
           src={require("../../Assets/icons/Indexeddb.jpeg")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">MySQL</h1>
          <img
           src={require("../../Assets/icons/mysql.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        <div class="shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <h1 className="font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Sequelize</h1>
          <img
           src={require("../../Assets/icons/sequelize.png")}
            className="w-20 mx-auto"
            alt="JavaScript"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
        </div>
        {/* <div>Test Driven Devlopment</div>
        <div>Model View Controller</div>
        <div>Object Relational Mapping</div> */}
      </div>
    </section>
  );
};

export default Skills;
