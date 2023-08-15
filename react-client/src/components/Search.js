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
            <input type="text" placeholder="   looking for ..." className='search' onChange={(e)=>handleChange(e)} />
        </div>
    )
}
export default Search