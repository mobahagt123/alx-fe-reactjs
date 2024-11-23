import { useQuery } from "react-query";
import React from 'react'

// define fetch func
const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json() 
}

function PostsComponent() {

    // use query Hook


    const { data, error, isLoading } = useQuery('fetchData',fetchData)


    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (error) return <div>Error loading data</div>;
    
    
    

    
  return (

    <div>
        <button onClick={fetchData}>Get Data</button>
        {data.map(item => (
            <div key={item.id}>title: {item.title}</div>
        ))}
    </div>
  )
}

export default PostsComponent;