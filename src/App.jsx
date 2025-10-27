import { useState } from 'react'
import './App.css'
import bgImg from './assets/bgImg.jpg'
import Platform from './components/Platform.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<img id='bg-img' src={bgImg}/>
    <div id="App">
      <Platform />
      </div>
      
    </>
  )
}

export default App
