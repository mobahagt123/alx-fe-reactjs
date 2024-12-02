import React from 'react'
import { useState, useEffect } from 'react'
import recipesData from '../data.json'

function HomePage() {
    
    const [recipes , setRecipes] = useState([])

    useEffect(()=> {
        setRecipes(recipesData)
    },[])
    
  return (

    <> 
      <div>
        <h2 className='text-xl font-bold uppercase font-mono mb-10'>Recipe Sharing App</h2>
        <div className='lg:grid lg:grid-cols-3'>
            {recipes.map((recipe)=> (
           <div key={recipe.id}>
             <div className='bg-teal-400 h-96 md:h-80 max-[780px]:h-80 m-3 mb-10 rounded-md overflow-auto shadow-slate-300 shadow-md hover:shadow-lg hover:shadow-slate-300'>
                <img className='w-full h-48 object-cover' src={recipe.image}/>
                <div className='m-auto mt-5'>
                    <span className='text-sm font-poppins font-bold hover:text-gray-800 hover:cursor-pointer'>{recipe.title}</span>
                    <span className='block text-sm m-3'>{recipe.summary}</span>
                </div>     
            </div>
           </div>

      ))}

        </div>
          

     </div>
      
         
    </>
  )
}

export default HomePage