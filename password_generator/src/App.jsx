import { useCallback, useState, useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [length, setLength] = useState(8)
  let [numAllowed, setnumAllowed] = useState(false)
  let [charAllowed, setcharAllowed] = useState(false)
  let [password, setPassword] = useState()
  const passwordGenerator = useCallback(() => {
    let password = ""; // Initialize an empty password string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base string with letters

    // Add numbers to the string if `numAllowed` is true
    if (numAllowed) {
      str += "0123456789";
    }

    // Add special characters to the string if `charAllowed` is true
    if (charAllowed) {
      str += "!@#$%^&*(){}";
    }

    // Generate the password by randomly selecting characters
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // Random index
      password += str.charAt(char); // Get the character at the random index
    }

    setPassword(password); // Update the `password` state with the generated password
  }, [length, numAllowed, charAllowed, setPassword]);
  const copyPasswordToClipboard = useCallback(()=>{window.navigator.clipboard.writeText(password) ,passwordRef.current?.select()},[password])

  useEffect(()=>{passwordGenerator()},[length, numAllowed, charAllowed,passwordGenerator])
  // useRef
  const passwordRef = useRef("Null")
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-400 ">
        <h1 className=" text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4" >
          <input type="text" value={password} placeholder="Password" className="outline-none w-full py-1 px-3" readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 ">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id="numberInput"  onChange={()=>{setnumAllowed((prev)=> !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput"  onChange={()=>{setcharAllowed((prev)=> !prev)}} />
            <label htmlFor="charInput">characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App