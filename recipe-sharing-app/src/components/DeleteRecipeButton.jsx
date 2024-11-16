import React from 'react'
import useRecipeStore from './recipeStore'



function DeleteRecipeButton(recipeId) {

    const deleteRecipe = useRecipeStore(state=> state.deleteRecipe)
    
  return (
    <button 
          style={{marginLeft:'262px', marginTop:'30px'}} 
          
          onClick={()=> deleteRecipe(recipeId.recipeId)}
          >
        Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton;