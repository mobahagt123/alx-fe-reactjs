import React from 'react'
import useRecipeStore from './recipeStore'
import { useParams } from 'react-router-dom'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'



function RecipeDetails() {

    const recipeId  = useParams()

    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id == recipeId.recipeid))
    
  return (
    <div>
       {!recipe ? <h1>The recipe has been deleted</h1> :<div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div>
            <EditRecipeForm  recipeId={recipe.id}/>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
    </div>}
         
        
        

    </div>
  )
}

export default RecipeDetails;