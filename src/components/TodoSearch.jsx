//import { useState } from 'react';
import '../styles/TodoSearch.css'


const TodoSearch = ({searchValue, setSearchValue}) => {
  


  const onSearchValue = (e) => { 
    console.log(e.target.value);
    setSearchValue(e.target.value)
   }
  return (
    <input 
      className='TodoSearch' 
      placeholder="Input"
      value={searchValue}
      onChange={onSearchValue}  
    />
  )
}

export {TodoSearch}