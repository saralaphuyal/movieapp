import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const{query,setQuery, isError} = useGlobalContext();
  
  return (
    <div className='text-center'>
      <h1>Search </h1>
      <form action="#" onSubmit={(e) => e.preventDefault()} >
        <input type="text" placeholder="search here.." value={query} onChange={(e) => setQuery(e.target.value)} className='border rounded'/>
      </form>
      <div className=''>
        <p>{isError.show && isError.msg}</p>

      </div>
    </div>
  )
}

export default Search
