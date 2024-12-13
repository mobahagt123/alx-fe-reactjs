
import axios from 'axios'




const fetchUserData = (username)=> {

    return (
         axios.get(`https://api.github.com/users/${username}` , {
        headers: {
            Authorization:  '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' ,
        }
     })   
    )
    
}

export default fetchUserData;

