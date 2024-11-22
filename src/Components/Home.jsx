import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import Card from './Card'

const Home = () => {
  const [images, setImages] = useState([])
  
  const changecategory=async()=>{
    let response=await fetch('https://pixabay.com/api/?key=47161757-bda7c986a4fc5dc320b499ff4')
    let data = await response.json()
    setImages(data.hits)
  }

  useEffect(()=>{
   changecategory()
  })

  return (<>
  
  <div className='main grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
    {
        images ? images.map((item)=> (
            <div  className="h-[300px] border w-[300px] overflow-hidden rounded-3xl mx-auto">
            <div className="h-[80%] w-full overflow-hidden border border-white bg-gray-100">
              <img
                src={item.largeImageURL}
                className="h-full w-full object-cover transition-all hover:scale-110 cursor-pointer"
              /></div>
              <div className='h-[20%] w-full'>
              <h3 className='text-center'>{item.tags}</h3>
              </div>
            </div>
           
         )): <h3>Error</h3>
     }
     </div>
       
       </>
  )
}

export default Home