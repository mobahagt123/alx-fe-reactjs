import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useRecipeStore = create(persist((set)=> ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes : [...state.recipes, newRecipe]})),
    setRecipes: (recipes)=> set({recipes}),
    deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter(recipe => recipe.id !==id)})),
    updateRecipe: (id, newTitle, newDescription) => set(state => ({recipes: state.recipes.map(recipe => 
        recipe.id === id ? {...recipe , title:newTitle ,description:newDescription } : recipe)}))
    })
      ),
    {
    name: 'recipe-storage', // unique name
    getStorage: () => localStorage, // default is localStorage can be a sessionStorage too
    }
     )
 


export default useRecipeStore;