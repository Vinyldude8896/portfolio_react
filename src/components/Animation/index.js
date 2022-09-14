import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
      <TypeAnimation
      sequence={[
        "Kevin's", // Types 'One'
        2000, // Waits 1s
        "Kevin Reid's", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Kevin Reid's Developer Portfolio", // Types 'Three' without deleting 'Two'
        8000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontFamily: 'URW Chancery L, cursive', fontSize: '2em', color: 'lightgrey', marginLeft: '10px'}}
    />
  )
}

export default Animation;