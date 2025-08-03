// Create an input box. When the user types in it, show the text below in real-time.

import React, { useState } from 'react'
function Problem2() {
    const [text,setText] = useState("")
     const handleChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='Enter your text'  onChange={handleChange} />
      <h3>you typed : {text}</h3>
    </div>
  )
}

export default Problem2
