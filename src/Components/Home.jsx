import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

const Home = () => {
    

  return (<>
  
  <div className='main bg-red-300 grid grid-cols-4 gap-4'>
    {
        Images ? Images.map((item)=>{
            return <div className='h-72 w-64 border b
            order-lime-300 rounded-2xl hover:scale-110 mx-auto'><img className="h-full w-full" src={item.largeImageURL}/></div>
        }) : <h3>Error</h3>
       }
       </div>
       
       </>
  )
}

export default Home