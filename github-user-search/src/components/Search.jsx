import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { fetchUserData, fetchUserLocation, fetchReposData }  from '../services/githubService'


function Search() {

    const [username, setUsername] = useState('')
    const [data , setData] = useState('')
    const [location, setLocation] = useState('')
    const [dataByLocation, setDataByLocation] = useState('')
    const [reposNumer, setReposNumber] = useState('')
    const [dataByReposNum, setDataByReposNum] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const nameCardRef = useRef(null)
    const locationCards = useRef(null)
    const reposNumCards = useRef(null)



    const getDataUsername = async()=> {
        try {
            await fetchUserData(username)
            .then(response => setData(response.data))
            setLoading(true)
        } catch (error) {
            setError(error)
        }
    }

    const getDataLocation = async()=> {
        try {
            await fetchUserLocation(location.toUpperCase())
            .then(response => setDataByLocation(response.data))
            setLoading(true)
        } catch (error) {
            setError(error)
        }
    }

    const getDataByReposNum = async()=> {
        try {
            await fetchReposData(reposNumer)
            .then(response => setDataByReposNum(response.data))
            setLoading(true)
        } catch (error) {
            setError(error)
        }
    }

    const handleUsername = (e)=> {
        e.preventDefault()
        getDataUsername()  
    }

    const handleLocation = (e)=> {
        e.preventDefault()
        getDataLocation()
    }

    const handleReposNum = (e)=> {
        e.preventDefault()
        getDataByReposNum()  
    }

   const displayNameCard = ()=> {
    nameCardRef.current.className = 'block'
   }

   const displayLocationCard = ()=> {
    locationCards.current.className = 'block'
   }

   const displayReposNumCard = ()=> {
    reposNumCards.current.className = 'block'
   }
  
        
  return (
    <div>

           {/* username input */}
        <h1 className='text-center mt-5 font-poppins font-semibold text-xl'>Search By GitHub Username</h1>
        <form className='flex justify-center m-10'
              onSubmit={handleUsername} >
            <input className='bg-gray-100 p-1 rounded-lg'
                   type='text'
                   placeholder='Github usename'
                   onChange={(e)=> setUsername(()=> e.target.value) }/>

             <button onClick={displayNameCard}
                     className='bg-blue-950 text-white px-2 ml-3 rounded-md' type='submit'>Search</button>
        </form>

            {/* User Location input */}

        <h1 className='text-center mt-5 font-poppins font-semibold text-xl'>Search By GitHub user Location</h1>
        <form className='flex justify-center m-10'
              onSubmit={handleLocation}
             >
            <input className='bg-gray-100 p-1 rounded-lg'
                   type='text'
                   placeholder='User location'
                   onChange={(e)=> setLocation(()=> e.target.value) }
                  />
            <button onClick={displayLocationCard}
                    className='bg-blue-950 text-white px-2 ml-3 rounded-md' type='submit'>Search</button>
        </form>

          {/* user Repos count input */}

        <h1 className='text-center mt-5 font-poppins font-semibold text-xl'>Search By GitHub User Repos Number</h1>
        <form className='flex justify-center m-10'
              onSubmit={handleReposNum}
               >
            <input className='bg-gray-100 p-1 rounded-lg'
                   type='text'
                   placeholder='Number of repos'
                   onChange={(e)=> setReposNumber(()=> e.target.value)}
                    />
            <button onClick={displayReposNumCard}
                    className='bg-blue-950 text-white px-2 ml-3 rounded-md' type='submit'>Search</button>
        </form>


        <div> 
               {/* username card  */}
            {error ? <div>Data Not Found</div> : 
            <div className='hidden' ref={nameCardRef}>
                {loading ? <div className= 'flex bg-gray-100 font-poppins m-10 h-60 p-5 items-center rounded-xl'>
                            <img className='w-44 rounded-full' src={data.avatar_url} />
                            <div className='ml-3 leading-7'>
                                    <h2> {data.name}</h2>
                                    <h2> {data.bio}</h2>
                                    <h2> {data.login}</h2>
                            </div>
                        </div> 
                : <div>Loading...</div>}
            </div>}
            
            {/* users location cards */}
            <div >
                {error ? <div>Data Not Found</div> : 
                <div className='hidden' ref={locationCards}>
                    
                  {dataByLocation && Array.from(dataByLocation.items).slice(1,10).map((item)=> (
                    
                    <div className=' bg-gray-200 m-5 p-5 rounded-lg shadow-md' key={item.id}>
                        <div className='flex justify-center'>
                            <img className='w-20 mr-4 ' src={item.avatar_url}/>
                            <div>
                                 <h2>{item.login}</h2>
                                 <h2>{item.html_url}</h2>
                                 <span>{item.score}</span>
                            </div>
                        </div>
                    </div>
                    
                  ))}
                 
               </div>}
            </div>
            


            {/* users repos number cards */}
            <div >
                {error ? <div>Data Not Found</div> : 
                <div className='hidden' ref={reposNumCards}>
                    
                  {dataByReposNum && Array.from(dataByReposNum.items).slice(1,10).map((item)=> (
                    
                    <div className=' bg-gray-200 m-5 p-5 rounded-lg shadow-md' key={item.id}>
                        <div className='flex items-center'>
                            <img className='w-20 mr-4 ' src={item.avatar_url}/>
                            <div>
                                 <h2>{item.login}</h2>
                                 <h2>{item.html_url}</h2>
                                 <span>{item.score}</span>
                            </div>
                        </div>
                    </div>
                    
                  ))}
                 
               </div>}
            </div>
        </div>
    </div>
  )
}

export default Search