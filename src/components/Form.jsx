import React, { useState } from 'react'

const Form = ({ character, setCharacter }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacter(query)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className='btn btn-light m-2'>search</button>
      </form>
    </div>
  )
}

export default Form