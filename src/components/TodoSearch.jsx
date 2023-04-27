import { useState } from 'react';
import '../styles/TodoSearch.css'


const TodoSearch = () => {

  const [searchValue, setSearchValue] = useState('')
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

export default TodoSearch