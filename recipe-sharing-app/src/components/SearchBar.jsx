import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {

    const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
   
    return (

        <input  
            style={{marginLeft:'230px'}}
            type="text"
            placeholder=" Search by recipe title"
            onChange={(e)=>setSearchTerm(e.target.value)}/>
    )
}

export default SearchBar;