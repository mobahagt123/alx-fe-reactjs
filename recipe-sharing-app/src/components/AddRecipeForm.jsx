import React from 'react'
import { useState } from 'react'
import useRecipeStore from './recipeStore'

function AddRecipeForm() {
    const [title ,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addRecipe = useRecipeStore(state => state.addRecipe)

    const handleSubmit = (event)=> {
        event.preventDefault()
        addRecipe({
            id: Date.now(),
            title: title,
            description: description
        });
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
                   value={title} 
                   onChange={(e)=> setTitle(e.target.value)} 
                   placeholder='Recipe Title'
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Recipe Description'
            />
            <button type='submit'>Add Recipe</button>
        </form>
    )
    }

export default AddRecipeForm;