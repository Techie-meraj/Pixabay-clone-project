import React, { useContext } from 'react'
import { contextstore} from '../Context/MyContext'



const Card = () => {
    const {images}=useContext(contextstore)
  return (<>
  <div className='main grid grid-cols-4 gap-4 mt-6'>
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

export default Card