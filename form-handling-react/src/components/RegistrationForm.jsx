import React from 'react'
import { useState } from 'react'



function RegistrationForm() {

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
              value={username}
              onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input 
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
        />
        
        <label htmlFor='password'>Password</label>
        <input 
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
        />
        <button onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}

export default RegistrationForm;