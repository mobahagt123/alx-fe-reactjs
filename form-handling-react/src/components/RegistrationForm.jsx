import React from 'react'
import { useState } from 'react'



function RegistrationForm() {

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''})

    const [errors , setErrors] = useState({
        username:'',
        email:'',
        password:''})

    const {username , email ,password} = formData
    
    //Validate email

    const checkValidation = ()=> {
        let validation = errors
        
        if(!username){
            validation.username = 'Username is required'
        }

        if(!email){
            validation.email = 'Email is required'
        }

        if(!password){
            validation.password = 'Password is required'
        }
        setErrors(validation)

    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        console.log(formData) 
        console.log(errors)
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