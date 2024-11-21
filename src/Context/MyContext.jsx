import React,{useState,useEffect} from 'react'
import { createContext,useContext } from 'react'



const contextstore=createContext()

const MyContext = ({children}) => {
  const [images, setImages] = useState([])
  
  const changecategory=async(category)=>{
    let response=await fetch(`https://pixabay.com/api/?key=47161757-bda7c986a4fc5dc320b499ff4&q=${category}`)
    let data = await response.json()
    setImages(data.hits)
  }


  return (
    <>
    <contextstore.Provider value={{changecategory,images,setImages}}>
      {children}
    </contextstore.Provider>
    </>
  )
}



export { contextstore,MyContext }; 