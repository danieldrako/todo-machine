import '../styles/TodoSearch.css'

const TodoSearch = () => {
  const onSearchValue = (e) => { 
    console.log(e.target.value);
   }
  return (
    <input 
      className='TodoSearch' 
      placeholder="Input"
      onChange={onSearchValue}  
    />
  )
}

export default TodoSearch