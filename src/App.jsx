import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './componment/Events'
import Event from './componment/Event'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './componment/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
   <Route path='/homme' element={<Event/>}></Route>
   <Route path='*' element={<NotFound/>}></Route>

    

    </Routes>
    
      
    </>
  )
}

export default App
