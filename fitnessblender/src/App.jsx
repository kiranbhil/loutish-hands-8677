import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Line from './Components/Line'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Line />
      <Navbar />
      <Home />
    </div>
  )
}

export default App
