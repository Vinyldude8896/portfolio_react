import React from "react";
import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Kevin's    ", // Types 'One'
        2000, // Waits 1s
        "Kevin Reid's    ", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Kevin Reid's Developer Portfolio    ", // Types 'Three' without deleting 'Two'
        8000,
        () => {
        // Place optional callbacks anywhere in the array
        //   console.log("Done typing!"); 
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="animation"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji',
        // fontSize: "2rem",
        // color: "lightgrey",
        // marginLeft: "2px",
        
      }}
    />
  );
};

export default Animation;
