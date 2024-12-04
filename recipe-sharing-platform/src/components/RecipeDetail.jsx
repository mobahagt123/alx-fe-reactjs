import React from 'react'
import { useState, useEffect } from 'react'
import recipesData from '../data.json'
import { useParams } from 'react-router-dom'
 

function RecipeDetail() {

    const [recipe , setRecipe] = useState([])
    const [ingredients , setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
  
    const recipeId = useParams()

  
    useEffect(()=> {
       const currentRecipe = recipesData.filter( (recipe) => recipe.id == recipeId.recipeid)[0]
       const currentIngredients = currentRecipe.ingredients
       const currentInstructions = currentRecipe.instructions
       setRecipe(currentRecipe)
       setIngredients(currentIngredients)
       setInstructions(currentInstructions)
    
    },[])
    


  return (

    <div>
      <div className='lg:flex items-center '> 
        <div>
         <h2 className='text-teal-600 lg:my-10 max-[650px]:my-5 sm:my-5 lg:text-start font-poppins text-2xl font-semibold'>{recipe.title}</h2>
         <img className='object-cover w-full rounded-sm' src={recipe.image}/>
        </div>
        <div  className='lg:w-3/5 lg:ml-20 mt-10 lg:mt-32'>
          <h2 className='my-5 text-lg font-poppins font-bold text-teal-600'>Recipe Summary</h2>
          <span className='leading-4 text-center font-poppins'>{recipe.summary}</span>
          <div className='flex justify-center items-center'>
            <img className='w-40 m-10 rounded-2xl' src={recipe.image} />
            <img className='w-40 m-10 rounded-2xl' src={recipe.image} />
          </div>
        </div>
        
      </div>
       

      <div className='bg-teal-300 p-5 mt-5 rounded-md shadow-md'>
         <h2 className='text-start py-5 font-poppins font-bold text-blue-950'>Recipe Ingredients:</h2>
         {Object.values(ingredients).map((item, id)=> (
          <div key={id}>
            <ul className='list-disc ml-6'>
              <li className='text-start' >{item}</li>
            </ul>
          </div>
         ))}
      </div>

      <div className='bg-teal-300 p-5 mt-5 rounded-md shadow-md'>
         <h2 className='text-start py-5 font-poppins font-bold text-blue-950'>Recipe Instructions:</h2>
         {Object.values(instructions).map((item, id)=> (
          <div key={id}>
            <ul className='flex ml-3'>
              <span>{id+1}- </span>
              <li className='list-none text-justify ml-2 pr-5'>{item}</li>
            </ul>
          </div>
         ))}
      </div>
    </div>
  )
}

export default RecipeDetail