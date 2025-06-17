import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todo, setTodo] = useState([])
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodo([todo, inputValue]);
      setInputValue('');
    }
  };


  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex justify-center ">
      <div className="max-w-lg min-w-96 min-h-96 max-h-max mt-8 bg-orange-300">
        <h1 className="text-center text-2xl mt-2">AllDo-Make your work Done</h1>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="outline-none p-2 ml-2 mt-2 min-w-80 rounded-xl" />
        <button onClick={handleAddTodo} className="bg-white p-2 rounded-xl">Add</button>
        <div className="max-h-fit min-h-10 bg-white w-11/12 m-2 mt-7 p-1 rounded-lg ">
          {todo.map((todo, index) => (
            <div key={index}>
              {todo}
            </div>
          ))}
          </div> 

      </div>
    </div>
    </>
  )
}

export default App