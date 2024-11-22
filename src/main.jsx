import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContext} from './Context/MyContext.jsx'
import Card from './Components/Card.jsx'
import { BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
  
    <MyContext>
      <App />
    </MyContext>
   
)
