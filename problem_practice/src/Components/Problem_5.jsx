// Display a random joke from an API when the component loads.

// Use this API: https://official-joke-api.appspot.com/random_joke
// Fetch the data using fetch inside useEffect.
// Store the joke in state using useState.
// Show the joke (setup + punchline) in your component.

import React, { useEffect, useState } from 'react'

function Problem_5() {
    const [joke , setJoke] = useState({setup:'',punchline:''})
    useEffect(()=>{
       const fetchJoke =  async ()=>{
        const res =  await fetch('https://official-joke-api.appspot.com/random_joke')
        console.log(res);
        const response = await res.json();
        console.log(response);
        setJoke(response);
 } 
fetchJoke()},[])
  return (
    <div>
      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>
    </div>
  )
}

export default Problem_5
