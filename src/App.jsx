import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './componment/Events'
import Event from './componment/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Event/>
    <Events/>
     
      
    </>
  )
}

export default App
