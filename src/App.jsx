import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeCalculator from './pages/AgeCalculator'
import Result from './pages/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Age Calculator</h1>
    <AgeCalculator/>
    {/* <Result/> */}
    </>
  )
}

export default App
