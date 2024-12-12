import React from 'react'
import { useState, useEffect } from 'react'





function AddRecipeForm() {

    const [title ,setTitle] = useState('')
    const [image ,setImage] = useState('')
    const [summary ,setSummary] = useState('')
    const [ingredients ,setIngredients] = useState([])
    const [instructions ,setInstructions] = useState([])

    const [errors, setErrors] = useState([])

    const recipes = JSON.parse(localStorage.getItem('recipesData'))
    
    useEffect(()=>{
        const validate = ()=>{

        let validation = []

        if(!title){
            validation.push('title is required')
        }
        
        setErrors(validation)

    }})


    const handleSubmit = (e)=> {
        e.preventDefault()
        recipes.push({
            id: Date.now(),
            title: title,
            image: image,
            summary: summary,
            ingredients: [ingredients],
            instructions: [instructions]
        })

        if(!validate()){
            localStorage.setItem('recipesData',JSON.stringify(recipes))
        }
        
    }
    
  return (
    <div>
        <form className='border-1 p-5 bg-teal-400 rounded-lg shadow-md' onSubmit={handleSubmit}>
            <h2 className='font-poppins text-xl font-semibold text-sky-950'>Add A new Recipe</h2>
            <div className='text-start'>
                <div className='flex flex-col mt-10'>
                    <label className='text-lg max-[600px]:text-sm font-normal font-poppins' htmlFor='name'>Recipe name</label>
                    <input className='bg-gray-100 border border-teal-100 mt-3 pl-2 rounded-md w-80'
                            type='text'
                            id='name'
                            value={title}
                            onChange={(event)=> setTitle(event.target.value)}
                            placeholder='Enter the recipe name'
                            />
                </div>
                <div className='flex flex-col mt-5'>
                    <label className="mt-3 text-lg max-[600px]:text-sm font-normal font-poppins" htmlFor='summary'>Recipe summary</label>
                    <textarea className='mt-3 border bg-gray-100 border-teal-100 rounded-md pl-2 h-20 w-80'
                                placeholder='Enter a brief summary'
                                id='summary'
                                value={summary}
                                onChange={(event)=> setSummary(event.target.value)} 
                                />
                </div>
                <div className='flex flex-col mt-10'>
                    <label className='text-lg max-[600px]:text-sm font-normal font-poppins' htmlFor='name'>Recipe image</label>
                    <input className='bg-gray-100 border border-teal-100 mt-3 pl-2 rounded-md w-80'
                            type='text'
                            id='image'
                            value={image}
                            onChange={(event)=> setImage(event.target.value)}
                            placeholder='Enter recipe image URL'
                            />
                </div>
                             
                            {/* ingredient block */}
                <div className='flex flex-col mt-5'>
                    <div className='flex justify-between h-20'>
                         
                         <label  id='ing-label' className="mt-[50px] text-lg max-[600px]:text-sm font-normal font-poppins" htmlFor='summary'>Ingredients <span className='text-xs text-red-700'>read Instructions</span></label>
                         <span id='ing-popup' className= 'hidden text-xs text-white bg-gray-900 h-12 max-[600px]:h-14 w-60 p-2 mt-7 rounded-xl relative transition ease-out duration-500'>
                            <div className='w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-gray-900 border-r-[10px] border-r-transparent absolute right-28 bottom-[-0.9rem]'></div>
                            each ingredient separated by comma and no spacing between them
                        </span>    
                    </div>
                
                    <textarea className='mt-3 border bg-gray-100 border-teal-100 rounded-md pl-2 h-20 w-86'
                                placeholder="Enter recipe ingredients"
                                id='ingredients' 
                                value={ingredients}
                                onChange={(event)=> setIngredients(event.target.value)}
                                />   
                </div>
                        
                             {/* instructions block */}
                <div className='flex flex-col '>
                    <div className='flex justify-between h-20'>
                         
                         <label id='ins-label' className="mt-[50px] text-lg max-[600px]:text-sm font-normal font-poppins" htmlFor='summary'>Preparation <span className='text-xs text-red-700'>read Instructions</span></label>
                         <span id='ins-popup' className= 'hidden text-xs text-white bg-gray-900 h-12 max-[600px]:h-14 w-60 p-2 mt-7 rounded-xl relative'>
                            <div className='w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-gray-900 border-r-[10px] border-r-transparent absolute right-28 bottom-[-0.9rem]'></div>
                            each step separated by comma and no spacing between them
                          </span>
                    </div>
                    <textarea className='mt-3 border bg-gray-100 border-teal-100 rounded-md pl-2 h-20 w-86'
                                placeholder="Enter preparation steps"
                                id='instructions' 
                                value={instructions}
                                onChange={(event)=> setInstructions(event.target.value)}
                                />
                </div>
                      {/* Errors block */}

                      {errors && errors.map((error)=>{
                        <ul>
                            <li>{error}</li>
                        </ul>
                      })}
                <div>

                </div>

                <div className='flex justify-center'>
                    <button className='mt-5 text-white bg-blue-950 w-24 p-2 rounded-lg shadow-lg cursor-pointer hover:shadow-md hover:shadow-gray-500' type='submit'>Submit</button>
                </div>
                
            </div>

    
        </form>
    </div>
  )
}

export default AddRecipeForm