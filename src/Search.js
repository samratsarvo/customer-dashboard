import React from 'react'

function Search(props){
    return(
    <input type='text' value={props.term} onChange={props.handleChange} className='form-control' placeholder='search by name or phone number'/>
    )
}

export default Search