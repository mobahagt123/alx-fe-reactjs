import React from 'react'
import { useState, useEffect } from 'react'
import fetchUserData from '../services/githubService'


function Search() {

    const [username, setUsername] = useState('')
    const [data , setData] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    
    const getData = async()=> {
        try {
            await fetchUserData(username)
            .then(response => setData(response.data))
            setLoading(true)
        } catch (error) {
            setError(error)

        }
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        getData()
    }
 
        
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type='text'
                   placeholder='Enter github usename'
                   onChange={(e)=>setUsername(()=> e.target.value)} />

            <button type='submit'>Search</button>
        </form>
        <div> 
            <div>
                {error ? <div>Looks like we cant find the user</div> : <div>
                {loading ? <div>
                                <img src={data.avatar_url} />
                                <span>{data.name}</span>
                                <span>{data.bio}</span>
                                <span>{data.login}</span>
                           </div> 
                : <div>Loading...</div>}
            </div>}
            </div>
            
            


          
        </div>
    </div>
  )
}

export default Search