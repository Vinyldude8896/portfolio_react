import React from "react";

export function Card(props) {
  return (
    <div className=" w-full block flex flex-wrap card z-10">
      <div className="block-1 w-full text-center pr-5 md:p-2 z-10">
      <h1 className="border-b-2 border-black-400">
      <a
          href={props.GithubLink}
          target="_blank"
          className="font-medium font-bold mr-5 text-indigo-600 hover:text-indigo-900 z-40"
        >
          {props.hrefOne}
        </a>
        <a
          href={props.deployedOrLiveLink}
          target="_blank"
          className="font-medium font-bold text-indigo-600 hover:text-indigo-900 z-40"
        >
          {props.hrefTwo}
        </a>
        </h1>
        <p className="font-small text-grey-300 mb-2 border-b-2 border-black-300 hover:text-grey-400">
          {props.title}
        </p>
        <img
          className="w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={props.src}
          title={props.title}
        ></img>
      </div>
      <div className="block-2"></div>
      <div className="block-3"></div>
      <div className="block-4"></div>
      <div className="block-5"></div>
    </div>
  );
}
