
import React, { useRef } from 'react';

function Problem_6() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.innerText = "Pardeep Yadav";  // focus the input field
  };

  return (
    <div>
      
      <div ref={inputRef}> Hello World</div>
      <button onClick={handleClick}>Change the Text</button>
    </div>
  )
}
export default Problem_6

// import React, { useState, useEffect, useRef } from 'react';

// function Problem_6() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(); // store karega purani value

//   useEffect(() => {
//     prevCount.current = count; // har bar update hone par store karo
//   }, [count]);

//   return (
//     <div>
//       <p>Current: {count}</p>
//       <p>Previous: {prevCount.current}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={()=>setCount(count-1)} >Decrease</button>
      
//     </div>
//   );
// }
// export default Problem_6
