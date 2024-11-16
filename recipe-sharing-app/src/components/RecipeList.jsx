import React from 'react'
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom';

function RecipeList() {

    const recipes = useRecipeStore(state => state.recipes)


  return (
    <div>
        <ul>
            {recipes.map(recipe => (      
                <li key={recipe.id}>
                    <Link to={`recipes/${recipe.id}`}>
                        <h3>{recipe.title}</h3>
                    </Link>
                        <p>{recipe.description}</p>    
                </li>       
     ))}
       </ul>  
    </div>
  );
};

export default RecipeList