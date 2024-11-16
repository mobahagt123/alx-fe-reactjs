import React from 'react'
import useRecipeStore from './recipeStore'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function DeleteRecipeButton(recipeId) {

    const deleteRecipe = useRecipeStore(state=> state.deleteRecipe)
    const navigate = useNavigate()

    
    const handleSubmit = () => {
      deleteRecipe(recipeId.recipeId)
      navigate("/")
    }
 
    
  return (
    <button 
          style={{marginLeft:'262px', marginTop:'30px'}} 
          
          onClick={handleSubmit}
          >
        Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton;