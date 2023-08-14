import {React, useState} from 'react'
const Search = (props) => {

    const [term, setTerm] = useState("")

    const handleChange = (e) => {
        var newTerm = e.target.value
        setTerm(newTerm)
        props.search(newTerm)
    }
console.log(term);
    return (
        <div className='searchForm'>
            <input type="text" placeholder="looking for ..." className='search' onChange={(e)=>handleChange(e)} />
            <button className='searchButton' onClick={()=> props.search(term)}><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg></button>
        </div>
    )
}
export default Search