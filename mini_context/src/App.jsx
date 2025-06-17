// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
  <UserContextProvider>
  <h1>Hello and welcome to the world of pardeep yadav</h1>
  <Login />
  <Profile/>

  </UserContextProvider>
  )
}

export default App
