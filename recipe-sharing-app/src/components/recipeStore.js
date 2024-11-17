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
    filteredRecipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({searchTerm:term}),
    filterRecipes: () => set(state => ({
      filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))}))
    })
      ),
    {
      name: 'recipes-storage',
      getStorage:() => localStorage,
      
    })
    
 


export default useRecipeStore;