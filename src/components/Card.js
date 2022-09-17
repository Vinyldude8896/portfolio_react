import React from "react";

export function Card(props) {
  return (
        <div className=" w-full block flex flex-wrap card z-10">
          <div className="block-1 w-full text-center pr-5 md:p-2 z-10">
            <img
              className="w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full z-10"
              src={props.src}
              title={props.title}
            ></img>
            <a
              href={props.GithubLink}
              target="_blank"
              className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900"
            >
              {props.hrefOne}
            </a>
            <a
              href={props.deployedOrLiveLink}
              target="_blank"
              className="font-medium font-bold text-indigo-600 hover:text-indigo-900"
            >
              {props.hrefTwo}
            </a>
          </div>
          <div className="block-2"></div>
          <div className="block-3"></div>
          <div className="block-4"></div>
          <div className="block-5"></div>
        </div>
 
  );
}


