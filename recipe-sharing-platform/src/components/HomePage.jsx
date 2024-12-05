import React from 'react'
import { useState, useEffect } from 'react'
import recipesData from '../data.json'
import { Link } from 'react-router-dom'



function HomePage() {
    
    const [recipes , setRecipes] = useState([])

    const localRecipes = JSON.parse(localStorage.getItem('recipesData'))

    useEffect(()=> {
        
        setRecipes(localRecipes)
    },[])

    console.log(recipes)
    
  return (

    <> 
      <div>
        <h2 className='text-xl font-bold uppercase font-mono mb-10'>Recipe Sharing App</h2>
        <div className='lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {recipes.map((recipe)=> (
            <div key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <div className='bg-teal-400 h-96 md:h-80 max-[780px]:h-80 m-3 mb-10 rounded-md overflow-auto shadow-slate-300 shadow-md hover:shadow-lg hover:shadow-slate-300 hover:cursor-pointer'>
                    <img className='w-full h-48 object-cover' src={recipe.image}/>
                    <div className='m-auto mt-5'>
                        <span className='text-sm font-poppins font-bold hover:text-gray-800 hover:cursor-pointer'>{recipe.title}</span>
                        <span className='block text-sm m-3'>{recipe.summary.substr(0,100)}...</span>
                    </div>     
                </div>
              </Link>
            </div>
          
      ))}
        </div>
           
        <div>
          <Link to={'/addrecipe'}>
            <button className='bg-teal-400 p-2 rounded-lg text-gray-950 shadow-lg cursor-pointer hover:shadow-md hover:shadow-gray-500'>Add Recipe</button>
          </Link>
        </div>
     </div>
      
         
    </>
  )
}

export default HomePage