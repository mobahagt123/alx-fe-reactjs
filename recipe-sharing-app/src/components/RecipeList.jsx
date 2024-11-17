import React from 'react'
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useEffect ,useState} from 'react';

function RecipeList() {
  
  const searchTerm = useRecipeStore(state => state.searchTerm)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  const recipes = useRecipeStore(state => state.recipes)
  const filterRecipes = useRecipeStore(state => state.filterRecipes)
  


  return (
    <div>
       <SearchBar /> 
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