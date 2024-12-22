import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Navbar/>
        <h1 className='main-header'>Home Page</h1>
      </div>
    </>
  )
}

export default App
