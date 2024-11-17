import React from 'react'
import useRecipeStore from './recipeStore'

function FavoritesList() {

    const favorites = useRecipeStore(state => state.favorites)
    const recipes = useRecipeStore(state => state.recipes)
    const myFavorites = []

    for (let recipe of recipes){
        for (let id of favorites){
            if (recipe.id === id){
                myFavorites.push(recipe)
            }
        }
    }
    console.log(myFavorites)

  return (

    <div>
        <h2>My Favorites</h2>
        {myFavorites.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
        ))}
    </div>
  )
}

export default FavoritesList;