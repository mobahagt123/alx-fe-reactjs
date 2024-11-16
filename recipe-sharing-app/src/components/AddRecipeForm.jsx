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
        <form style={{display:'grid'}} onSubmit={handleSubmit}>
            <input style={{margin:'5px'}}
                   type='text' 
                   value={title} 
                   onChange={(e)=> setTitle(e.target.value)} 
                   placeholder='Recipe Title'
            />
            <textarea
                style={{margin:'5px'}}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Recipe Description'
            />
            <button style={{backgroundColor:'green' ,margin:'5px'}} type='submit'>Add Recipe</button>
        </form>
    )
    }

export default AddRecipeForm;