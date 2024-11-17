import React from 'react'
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useEffect ,useState} from 'react';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

function RecipeList() {
  
  const searchTerm = useRecipeStore(state => state.searchTerm)
  const recipes = useRecipeStore(state => state.recipes)
  
  const filtered = recipes.filter(recipe => 
              recipe.title.toLowerCase().includes(searchTerm))
  
  const addFavorite = useRecipeStore( state => state.addFavorite)    
  const removeFavorite = useRecipeStore( state => state.removeFavorite)  

  return (
    <div>
       <SearchBar /> 
        <ul>
          {filtered.map(recipe => (      
          <li key={recipe.id} style={{marginTop:'20px'}}>
              <Link to={`recipes/${recipe.id}`}>
                <h3 style={{display:'inline'}}>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>   
              <button onClick={()=> addFavorite(recipe.id)}>Add to Favorites</button> 
              <button style={{marginLeft:'30px'}} onClick={()=> removeFavorite(recipe.id)}>Remove from Favorites</button> 
          </li>       
     ))}
       </ul>  
       <FavoritesList />
       <RecommendationsList />
       
    </div>
  );
};

export default RecipeList