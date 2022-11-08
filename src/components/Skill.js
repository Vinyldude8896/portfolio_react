import React from "react";

export function Skill(props) {
  return (
    <div className="skillBox shadow-md hover:shadow-lg duration-500 py-2 rounded-lg shadow-indigo-500 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
    <h1 className="skillText font-light tracking-tight text-gray-900 sm:text-2xl md:text-2xl">{props.h1Text}</h1>
      <img
       src={props.src}
        className="w-20 mx-auto"
        alt={props.alt}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-30"></div>
    </div>
  )
}

