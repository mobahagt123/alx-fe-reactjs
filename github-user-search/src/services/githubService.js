
import axios from 'axios'

export const fetchUserData = (username)=> {

    return (
         axios.get(`https://api.github.com/users/${username}` , {
        headers: {
            Authorization:  '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' ,
        }
     })   
  )
    
}


export const fetchUserLocation = (location)=> {
    return (
        axios.get(`https://api.github.com/search/users?q=location:${location}` , {
             headers: {
            Authorization:  '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' ,
             }
        })
    )
}

export const fetchReposData = (reposNumber)=> {
    return (
        axios.get(`https://api.github.com/search/users?q=repos:${reposNumber}` , {
             headers: {
            Authorization:  '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' ,
             }
        })
    )
}

