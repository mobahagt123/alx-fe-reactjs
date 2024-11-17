import { Link } from 'react-router-dom';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useRecipeStore = create(persist(
  (set)=> ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes : [...state.recipes, newRecipe]})),
    setRecipes: (recipes)=> set({recipes}),
    deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter(recipe => recipe.id !==id)})),
    updateRecipe: (id, newTitle, newDescription) => set(state => ({recipes: state.recipes.map(recipe => 
        recipe.id === id ? {...recipe , title:newTitle ,description:newDescription } : recipe)})),
    searchTerm: '',
    setSearchTerm: (term) => set({searchTerm:term}),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({ 
      filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))})),
    favorites:[],
    addFavorite: (recipeId) => set( state => ({favorites: [...state.favorites,recipeId]})),
    removeFavorite: (recipeId) => set( state => ({favorites: state.favorites.filter(id => id !== recipeId)})),
    recommendations:[],
    generateRecommendations: ()=> set( state =>{
      const recommended = state.recipes.filter( recipe => 
        state.favorites.includes(recipe.id) && Math.random()> 0.5
      )
      return { recommendations : recommended }

    })
    })
      ),
    {
      name: 'recipes-storage',
      getStorage:() => localStorage,
      
    })
    
export default useRecipeStore;