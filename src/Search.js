import React from 'react'

function Search({search}) {

    return (
        <div>
            <h4>search:</h4>
            <input type='text' onChange={search}/>
        </div>

    )
}


export default Search;