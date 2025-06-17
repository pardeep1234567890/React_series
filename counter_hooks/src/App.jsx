import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0)
// let counter = 15
const addValue =()=>{
  // counter = counter+1
  console.log(counter)
  setCounter(counter+1)
}
const removeValue = () =>{
  // counter = counter-1
  if(counter > 0){
    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>Pardeep and React</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
