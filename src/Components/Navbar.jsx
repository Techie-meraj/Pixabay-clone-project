import React, { useContext, useState } from 'react'
import { contextstore } from '../Context/MyContext'


const Navbar = () => { 
  const {changecategory}=useContext(contextstore)
  const [search,setsearch]=useState("")

 const handleinput=(e)=>{
  setsearch(e.target.value)
  changecategory(search)
 }
     
  return (<>
  
   <div className='flex justify-around'>
     <div className='mt-[20px]'>
        <input
          type="text"
          placeholder="Type Category Here .."
          onChange={handleinput}
          // value={category}
          className="input input-bordered w-[300px]  italic placeholder:italic "
        /></div>
   <div className='box flex justify-end mt-[20px]'>
    <button className="btn btn-active mx-6" onClick={()=>{changecategory("health")}}>Health</button>
    <button className="btn btn-active btn-neutral mx-6" onClick={()=>{changecategory("place")}}>Places</button>
    <button className="btn btn-active btn-primary mx-6" onClick={()=>{changecategory("sports")}}>Sports</button>
    <button className="btn btn-active btn-secondary mx-6" onClick={()=>{changecategory("industry")}}>Industry</button>
    <button className="btn btn-active btn-accent mx-6" onClick={()=>{changecategory("computer")}}>Computers</button>
   </div>
  </div>
  </>)
}

export default Navbar