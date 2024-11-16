import React from 'react'
import useRecipeStore from './recipeStore'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function EditRecipeForm(recipeId) {

    const [newTitle , setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const updateRecipe = useRecipeStore(state => state.updateRecipe)

    


    const handleSubmit = (event)=> {
        event.preventDefault()
        updateRecipe(recipeId.recipeId ,newTitle, newDescription)
        setNewTitle('')
        setNewDescription('')
    }


  return (
    <>
      <form style={{display:'block'}} onSubmit={handleSubmit}>
        <h4 style={{textAlign:'center'}}>Edit Recipe Form</h4>
        <input style={{display:'block',margin:'10px',marginLeft:'240px'}}
               type='text'
               value={newTitle}
               onChange={(e)=> setNewTitle(e.target.value)}
        />
        <textarea style={{display:'block',width:'50%',marginLeft:'150px'}}
               value={newDescription}
               onChange={(e) => setNewDescription(e.target.value)}
        />
               
        <button style={{marginLeft:'270px',marginTop:'20px'}} type='submit'>Edit Recipe</button>
      </form>
    </>
  )
}

export default EditRecipeForm