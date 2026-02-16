import { useState } from 'react'
import Card from './Card'
import './App.css'


function App() {
  const [isClicked, setIsClicked] = useState(false);
  function showCard() {
    setIsClicked(true);
  }

  return (
    <>
    <div className='flex flex-col gap-10'>
        <h1 className='font-bold text-2xl'>
          Comics Quiz</h1>
        <button 
        onClick={showCard}
        className='
        {`${isClicked ? hidden: block}`}
        border-2 border-black bg-blue-500
         text-white p-2 rounded-xl cursor-pointer'>
          Start Game</button>
    </div>
    </>
  )
}

export default App
