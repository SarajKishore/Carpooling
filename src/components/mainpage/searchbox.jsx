import React from 'react';
import './search.css';
const SearchBox= ({searchfield,searchChange})=>{
    return(
        <div>
            <form>
            <input 
                type='search'
                placeholder='Search your Name here'
                onChange={searchChange}
            />
            </form>
        </div>
    )
}

export default SearchBox;