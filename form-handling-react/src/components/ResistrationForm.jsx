import React from 'react'
import { useState } from 'react'



function ResistrationForm() {

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''})
    
    //Validate form inputs
    const ValidateForm = ()=> {
        let FormErrors = []
        Object.keys(formData).forEach(key => {
            if (formData[key]===''){
                FormErrors.push({[key]:'is required'})
            }
        })
        return FormErrors
    }

    const errors = ValidateForm()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(errors){
            errors.forEach(error => {
                console.log(`${Object.keys(error)} ${Object.values(error)}`)
            })
        }
    }

    const handleChange = (e)=> {
        const { name, value } = e.target
        setFormData(prevState => ({...prevState, [name]: value}))
    }
  
  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input 
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
        />
        
        <label htmlFor='password'>Password</label>
        <input 
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
        />
        <button onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}

export default ResistrationForm