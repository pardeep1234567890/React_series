// Build a component that changes the background color of the page every 2 seconds.
// Use useEffect() + setInterval() + clearInterval() properly.

// Use a state to track the current color index.
// On each interval, update the index.
// Use document.body.style.backgroundColor = color to change the background.

// import React, { useEffect, useState } from 'react'

// function Color_updater() {
//     const bg =["red","blue","green","pink"]
//         for (let index = 0; index < bg.length; index++) {
//         const element = bg[index];
//         return element;
//     }
//     const[color,setColor] = useState(element)
//    useEffect(
//     ()=>{
//         const changeColor = setInterval(()=>{
//             setColor(document.body.style.backgroundColor = color)
//         },2000)

//     },[color]) 

//   return (
//     <div>
//       {color}
//     </div>
//   )
// }

// export default Color_updater


import React, { useEffect, useState } from 'react';

function ColorUpdater() {
  const bgColors = ["silver","gold","red", "blue", "green", "pink","yellow","orange"];
  const [index, setIndex] = useState(0); // index to track which color

  useEffect(() => {
    const intervalId = setInterval(() => {
      // move to the next color in the array
      setIndex(prevIndex => (prevIndex + 1) % bgColors.length);
    }, 2000);

    return () => clearInterval(intervalId); // cleanup
  }, []);

  // update background color
  useEffect(() => {
    document.body.style.backgroundColor = bgColors[index];
  }, [index]);

  return (
    <div>
      <h2>Current Color: {bgColors[index]}</h2>
    </div>
  );
}

export default ColorUpdater;

