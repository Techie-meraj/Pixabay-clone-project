import { Routes,Route } from 'react-router-dom'
import './App.css'
import Card from './Components/Card'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { MyContext } from './Context/MyContext'


function App() {
 
  

  return (
    <>
     <div className='h-full w-full bg-amber-100'>
      <Navbar/>
      <Card/>
     <Home/>
     </div>
    
    </>
  )
}

export default App
